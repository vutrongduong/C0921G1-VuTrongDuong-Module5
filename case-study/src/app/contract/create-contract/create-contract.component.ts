import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  createForm = new FormGroup({
    id: new FormControl('',Validators.required),
    startDate: new FormControl('',Validators.required),
    endDate: new FormControl('',Validators.required),
    deposit: new FormControl('',Validators.required),
    totalMoney: new FormControl('',Validators.required),
    customer: new FormControl('',Validators.required),
    facility: new FormControl('',Validators.required),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  createContract() {

  }
}
