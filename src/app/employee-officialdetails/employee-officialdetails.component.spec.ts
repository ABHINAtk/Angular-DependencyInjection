import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOfficialdetailsComponent } from './employee-officialdetails.component';

describe('EmployeeOfficialdetailsComponent', () => {
  let component: EmployeeOfficialdetailsComponent;
  let fixture: ComponentFixture<EmployeeOfficialdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeOfficialdetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeeOfficialdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
