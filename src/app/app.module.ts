import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WaterTankDashboardModule } from './water-tank-dashboard/water-tank-dashboard.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WaterTankDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
