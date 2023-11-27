import { Component } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-employee-officialdetails',
  templateUrl: './employee-officialdetails.component.html',
  styleUrls: ['./employee-officialdetails.component.scss']
})
export class EmployeeOfficialdetailsComponent {

  
  employeeOfficialDetails : string[] = [];

  constructor(private empService : EmployeeDetailsService) { }

  ngOnInit(): void{
    debugger
    this.employeeOfficialDetails = this.empService?.getOfficialDetails()
  }

}
