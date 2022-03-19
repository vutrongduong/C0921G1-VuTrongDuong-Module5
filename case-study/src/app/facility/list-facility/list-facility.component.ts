import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../services/facility.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteFacilityComponent} from '../delete-facility/delete-facility.component';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  public facilityList: Facility[];
  p: number = 1;

  constructor(private facilityService: FacilityService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.facilityService.getAll().subscribe(value => {
      this.facilityList = value;
      console.log(this.facilityList);
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteFacilityComponent, {
      width: '450px',
      height: '350px',
      data: id
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}
