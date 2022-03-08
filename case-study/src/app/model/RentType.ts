export class RentType {
  rentTypeId:number;
  rentTypeName:string;
  rentTypeCost:number;

  constructor(rentTypeId: number, rentTypeName: string, rentTypeCost: number) {
    this.rentTypeId = rentTypeId;
    this.rentTypeName = rentTypeName;
    this.rentTypeCost = rentTypeCost;
  }
}
