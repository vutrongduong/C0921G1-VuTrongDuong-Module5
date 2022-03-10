import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  createForm :FormGroup;


  constructor() {
  }

  ngOnInit(): void {
   this.createForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^DV-[0-9]{4}$')]),
      name: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
      area: new FormControl('', [Validators.required,Validators.pattern('^([1-9])([0-9]*)$')]),
      cost: new FormControl('', [Validators.required,Validators.pattern('^([1-9])([0-9]*)$')]),
      maxPeople: new FormControl('', [Validators.required,Validators.pattern('^([1-9])([0-9]*)$')]),
      rentType: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required,Validators.pattern('^([1-9])([0-9]*)$')]),
      numberOfFloors: new FormControl('', [Validators.required,Validators.pattern('^([1-9])([0-9]*)$')]),
    });
  }

  createFacility() {
    console.log(this.createForm);
  }
}
