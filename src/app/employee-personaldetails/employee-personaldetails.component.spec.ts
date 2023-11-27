import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePersonaldetailsComponent } from './employee-personaldetails.component';

describe('EmployeePersonaldetailsComponent', () => {
  let component: EmployeePersonaldetailsComponent;
  let fixture: ComponentFixture<EmployeePersonaldetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeePersonaldetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeePersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
