import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../model/facilityType';
import {FacilityTypeService} from '../../services/facility-type.service';
import {RentTypeService} from '../../services/rent-type.service';
import {RentType} from '../../model/RentType';
import Swal from 'sweetalert2';
import {FacilityService} from '../../services/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  createForm: FormGroup;
  facilityTypeList: FacilityType[];
  rentTypeList: RentType[];


  constructor(private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^DV-[0-9]{4}$')]),
      facilityName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      facilityArea: new FormControl('', [Validators.required, Validators.pattern('^([1-9])([0-9]*)$')]),
      facilityCost: new FormControl('', [Validators.required, Validators.pattern('^([1-9])([0-9]*)$')]),
      facilityMaxPeople: new FormControl('', [Validators.required, Validators.pattern('^([1-9])([0-9]*)$')]),
      rentType: new FormControl('', [Validators.required]),
      facilityType: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.pattern('^([1-9])([0-9]*)$')]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.pattern('^([1-9])([0-9]*)$')]),
    });
    this.facilityTypeService.getAll().subscribe(value => {
      this.facilityTypeList = value;
    });
    this.rentTypeService.getAll().subscribe(value => {
      this.rentTypeList = value;
    });
  }

  create() {
    this.facilityService.create(this.createForm.value).subscribe(() => {
      this.router.navigateByUrl('/facility');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }
}
