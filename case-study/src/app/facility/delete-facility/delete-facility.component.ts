import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {FacilityService} from '../../services/facility.service';
import {Facility} from '../../model/facility';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-facility.component.html',
  styleUrls: ['./delete-facility.component.css']
})
export class DeleteFacilityComponent implements OnInit {
  id: number;
  facilityName: string;
  rentTypeName: string;
  facilityTypeName: string;
  facility: Facility;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private facilityService: FacilityService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.facilityService.findById(this.data).subscribe(value => {
      this.facility = value;
      this.id = this.facility.id;
      this.facilityName = this.facility.facilityName;
      this.facilityTypeName = this.facility.facilityType.facilityName;
      this.rentTypeName = this.facility.rentType.rentTypeName;

    });
  }

  delete() {
    this.facilityService.delete(this.data).subscribe(() => {
      Swal.fire(
        'Good job!',
        'Successfully delete customer',
        'success'
      );
      this.dialog.closeAll();
    });
  }

  close() {
    this.dialog.closeAll();
  }
}
