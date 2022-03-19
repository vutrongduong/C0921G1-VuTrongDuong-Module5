import {Injectable} from '@angular/core';
import {Employee} from '../model/employee';
import {Position} from '../model/Position';
import {EducationDegree} from '../model/EducationDegree';
import {Division} from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employeeList: Employee[];

  constructor() {
  }

  public getAll() {
    this.employeeList = [];
    this.employeeList.push(new Employee(1, 'nguyen van a', '2020-02-02', '123456789', '1000', '0905329893',
      'anguyen@gmail.com', 'da nang', new Position(1, 'a'), new EducationDegree(1, 'a'),
      new Division(1, 'a')));
    return this.employeeList;
  }

}
