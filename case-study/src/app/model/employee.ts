import {Division} from './division';
import {Position} from './Position';
import {EducationDegree} from './EducationDegree';

export class Employee {
  employeeId: number;
  employeeName: string;
  employeeBirthday: string;
  employeeIdCard: string;
  employeeSalary: string;
  employeePhone: string;
  employeeEmail: string;
  employeeAddress: string;
  position: Position;
  educationDegree: EducationDegree;
  division: Division;


  constructor(employeeId: number, employeeName: string, employeeBirthday: string, employeeIdCard: string, employeeSalary: string, employeePhone: string, employeeEmail: string, employeeAddress: string, position: Position, educationDegree: EducationDegree, division: Division) {
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.employeeBirthday = employeeBirthday;
    this.employeeIdCard = employeeIdCard;
    this.employeeSalary = employeeSalary;
    this.employeePhone = employeePhone;
    this.employeeEmail = employeeEmail;
    this.employeeAddress = employeeAddress;
    this.position = position;
    this.educationDegree = educationDegree;
    this.division = division;
  }
}
