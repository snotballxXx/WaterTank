#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>

// Define Trig and Echo pin:
#define trigPin 5
#define echoPin1 14
#define echoPin2 4

struct EchoResponse 
{
  volatile unsigned long _start;
  volatile unsigned long _duration; 
  int _pin; 
  int _distance;

  EchoResponse(int pin) :
    _start(0),
    _duration(0),
    _pin(pin),
    _distance(0)
  {
  }
};

EchoResponse channel1(echoPin1);
EchoResponse channel2(echoPin2);

void stateChanged1(void) {
  processEcho(channel1);
}

void stateChanged2(void) {
  processEcho(channel2);
}

void processEcho(EchoResponse& data)
{
  if (digitalRead(data._pin) == LOW)
  {
    data._duration = micros() - data._start;
    data._start = 0;
  }
  else
    data._start = micros();  
}

const char* ssid = "TheMadHouse";
const char* password = "masonlewissuck!";

ESP8266WebServer server(80);

void handleTanksRequest() { 
  String msg = "{ 'time':";
  msg += millis();
  msg += ", 'data':[ {'id':1, 'distance':"; 
  msg += channel1._distance;
  msg += "}, {'id':2, 'distance':";
  msg += channel2._distance;
  msg += "} ] }";
  server.send(200, "application/json", msg);
}

void handleNotFound() {
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
}

void setup(void) {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");

  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (MDNS.begin("esp8266")) {
    Serial.println("MDNS responder started");
  }

  server.on("/tanks", handleTanksRequest);
  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");

    // Define inputs and outputs
  pinMode(BUILTIN_LED, OUTPUT);
  pinMode(trigPin, OUTPUT);
  pinMode(channel1._pin, INPUT);
  pinMode(channel2._pin, INPUT);
  digitalWrite(trigPin, HIGH);
  attachInterrupt(digitalPinToInterrupt(channel1._pin), stateChanged1, CHANGE);
  attachInterrupt(digitalPinToInterrupt(channel2._pin), stateChanged2, CHANGE);
  digitalWrite(BUILTIN_LED, HIGH);
}

void loop(void) {
  server.handleClient();

  //if (millis() < 10000)return;
   // Trigger the sensor by setting the trigPin low for 10 microseconds:
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  delay(1000);
  
  // Calculate the distance:
  channel1._distance = channel1._duration * 0.034 / 2;
  channel2._distance = channel2._duration * 0.034 / 2;
}
