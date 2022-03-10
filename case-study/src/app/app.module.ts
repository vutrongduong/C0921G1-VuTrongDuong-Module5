import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {DeleteEmployeeComponent} from './employee/delete-employee/delete-employee.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateContractDetailComponent} from './contract_detail/create-contract-detail/create-contract-detail.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {FacilityModule} from './facility/facility.module';
import {AppRoutingModule} from './app-routing.module';
import {CustomerModule} from './customer/customer.module';
import {ContractModule} from './contract/contract.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent,
    CreateContractDetailComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FacilityModule,
    CustomerModule,
    ContractModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
