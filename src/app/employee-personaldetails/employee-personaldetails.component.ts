import { Component } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-employee-personaldetails',
  templateUrl: './employee-personaldetails.component.html',
  styleUrls: ['./employee-personaldetails.component.scss']
})
export class EmployeePersonaldetailsComponent {

  employeeDetails : string[] = [];

  constructor(private empService : EmployeeDetailsService) { }

  ngOnInit(): void{
    debugger
    this.employeeDetails = this.empService?.getEmployeeDetails()
  }

}
