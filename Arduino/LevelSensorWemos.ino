// Define Trig and Echo pin:
#define trigPin 3
#define echoPin1 0
#define echoPin2 2

struct EchoResponse 
{
  volatile unsigned long _start;
  volatile unsigned long _duration; 
  int _pin; 

  EchoResponse(int pin) :
    _start(0),
    _duration(0),
    _pin(pin)
  {
  }
};

EchoResponse channel1(echoPin1);
EchoResponse channel2(echoPin2);

void setup() {
  // Define inputs and outputs
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin1, INPUT);
  pinMode(echoPin2, INPUT);
  digitalWrite(trigPin, HIGH);
  attachInterrupt(digitalPinToInterrupt(channel1._pin), stateChanged1, CHANGE);
  attachInterrupt(digitalPinToInterrupt(channel2._pin), stateChanged2, CHANGE);
  // Begin Serial communication at a baudrate of 9600:
  Serial.begin(9600);
}

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

void loop() {
 // Trigger the sensor by setting the trigPin low for 10 microseconds:
  digitalWrite(trigPin, LOW);
  delayMicroseconds(10);
  digitalWrite(trigPin, HIGH);
  
  // Calculate the distance:
  int distance1 = channel1._duration * 0.034 / 2;
  int distance2 = channel2._duration * 0.034 / 2;
  
  Serial.print(millis());
  Serial.print(" distance = ");
  Serial.print(distance1);
  Serial.print(", ");
  Serial.print(distance2);
  Serial.println(" cm");
  
  delay(500);
}
