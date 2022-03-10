import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/CustomerType';
import {CustomerTypeService} from '../../services/customer-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  public customerTypeList: CustomerType[];
  createForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{12}|\\d{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91){1}\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required])
  });

  constructor(private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getAll();
  }

  createSubmit() {
    console.log(this.createForm.value);
  }
}
