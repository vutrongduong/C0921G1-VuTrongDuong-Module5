import {RentType} from './RentType';
import {FacilityType} from './facilityType';

export class Facility {
  id: number;
  facilityName: string;
  facilityArea: string;
  facilityCost: string;
  facilityMaxPeople: number;
  rentType: RentType;
  facilityType: FacilityType;
  standardRoom: string;
  description: string;
  poolArea: string;
  numberOfFloors: string;


  constructor() {
  }
}
