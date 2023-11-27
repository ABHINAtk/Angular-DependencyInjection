import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  empDetails : string[] = ['Anupama','Anupama@gmail.com','+91 98547423','Kozhikode,Kerala,India'];

  constructor() { }

  empPersonalDetails : string[] =['Anupama','EMP001','Software Engineer'];

  getEmployeeDetails(): string[]{
    return this.empDetails;
  }

  getOfficialDetails(): string[]{
    return this.empPersonalDetails;
  }

 
}
