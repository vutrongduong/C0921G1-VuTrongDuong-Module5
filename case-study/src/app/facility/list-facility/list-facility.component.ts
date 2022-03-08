import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../services/facility.service';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  public facilityList: Facility[];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityList = this.facilityService.getAll();
  }
}
