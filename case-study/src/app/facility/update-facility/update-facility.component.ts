import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../services/facility.service';
import {FacilityTypeService} from '../../services/facility-type.service';
import {RentTypeService} from '../../services/rent-type.service';
import {FacilityType} from '../../model/facilityType';
import {RentType} from '../../model/RentType';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {

  createForm: FormGroup;
  facility = new Facility();
  facilityTypeList: FacilityType[];
  rentTypeList: RentType[];

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private  route: Router) {
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.facilityService.findById(id).subscribe(value => {
      this.facility = value;
    }, error => {
    }, () => {
      this.facilityTypeService.getAll().subscribe(value => {
        this.facilityTypeList = value;
        this.rentTypeService.getAll().subscribe(value => {
          this.rentTypeList = value;
        });
        this.createForm.patchValue(this.facility);
      });
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
    });
  }
  update() {
    let facility = this.createForm.value;
    this.facilityService.update(facility).subscribe();
    this.route.navigateByUrl('facility');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Successfully updated facility',
      showConfirmButton: false,
      timer: 1500
    });
    this.ngOnInit();
  }
}
