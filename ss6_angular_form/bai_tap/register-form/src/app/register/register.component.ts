import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Validate} from '../validate';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validate = new Validate();
  createForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    passwordForm: new FormGroup({
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      confirmPassword: new FormControl('', [Validators.minLength(6), Validators.required]),
    }, this.validate.comparePassword),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, this.validate.checkAge]),
    gender: new FormControl(),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
  });
  countryList = ['Viet Nam', 'USA', 'Japan', 'China'];

  onSubmit() {
    if (this.createForm.invalid) {
      console.log('error');
    } else {
      console.log(this.createForm.value);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  get email() {
    return this.createForm.get('email');
  }

  get country() {
    return this.createForm.get('country');
  }

  get age() {
    return this.createForm.get('age');
  }

  get gender() {
    return this.createForm.get('gender');
  }

  get phone() {
    return this.createForm.get('phone');
  }
}
