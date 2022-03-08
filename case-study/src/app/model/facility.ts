import {RentType} from './RentType';
import {ServiceType} from './ServiceType';

export class Facility {
  facilityId: number;
  facilityName: string;
  facilityArea: string;
  facilityCost: string;
  facilityMaxPeople: number;
  rentType: RentType;
  facilityType: ServiceType;
  standardRoom: string;
  description: string;
  poolArea: string;
  numberOfFloors: string;


  constructor(facilityId: number, facilityName: string, facilityArea: string, facilityCost: string, facilityMaxPeople: number, rentType: RentType, facilityType: ServiceType, standardRoom: string, description: string, poolArea: string, numberOfFloors: string) {
    this.facilityId = facilityId;
    this.facilityName = facilityName;
    this.facilityArea = facilityArea;
    this.facilityCost = facilityCost;
    this.facilityMaxPeople = facilityMaxPeople;
    this.rentType = rentType;
    this.facilityType = facilityType;
    this.standardRoom = standardRoom;
    this.description = description;
    this.poolArea = poolArea;
    this.numberOfFloors = numberOfFloors;
  }
}
