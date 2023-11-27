import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePersonaldetailsComponent } from './employee-personaldetails/employee-personaldetails.component';
import { EmployeeOfficialdetailsComponent } from './employee-officialdetails/employee-officialdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePersonaldetailsComponent,
    EmployeeOfficialdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
