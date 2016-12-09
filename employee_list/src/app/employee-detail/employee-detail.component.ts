import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
    employees = [];
    errorMsg: string;
  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
        // this.employees = this._empService.getEmployees();
        this._empService.getEmployees()
            .subscribe(resEmpData => this.employees = resEmpData,
                        resEmpError => this.errorMsg = resEmpError);
    }

}
