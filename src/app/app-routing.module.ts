import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeePersonaldetailsComponent } from './employee-personaldetails/employee-personaldetails.component';
import { EmployeeOfficialdetailsComponent } from './employee-officialdetails/employee-officialdetails.component';

const routes: Routes = [
  {
    path:'personal-details',
    component:EmployeePersonaldetailsComponent
  },
  {
    path:'official-details',
    component:EmployeeOfficialdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
