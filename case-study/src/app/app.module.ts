import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';
import {UpdateCustomerComponent} from './customer/update-customer/update-customer.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {DeleteFacilityComponent} from './facility/delete-facility/delete-facility.component';
import {UpdateFacilityComponent} from './facility/update-facility/update-facility.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {DeleteEmployeeComponent} from './employee/delete-employee/delete-employee.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {CreateContractDetailComponent} from './contract_detail/create-contract-detail/create-contract-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListContractComponent } from './contract/list-contract/list-contract.component';

const routes: Routes = [
  {
    path: 'customer', component: ListCustomerComponent,
  },
  {
    path: 'customer/create', component: CreateCustomerComponent,
  },
  {
    path: 'customer/update', component: UpdateCustomerComponent,
  },
  {
    path: 'customer/delete', component: DeleteCustomerComponent,
  },
  {
    path: 'employee', component: ListEmployeeComponent,
  },
  {
    path: 'employee/create', component: CreateEmployeeComponent,
  },
  {
    path: 'employee/update', component: UpdateEmployeeComponent,
  },
  {
    path: 'employee/delete', component: DeleteEmployeeComponent,
  },
  {
    path: 'facility', component: ListFacilityComponent,
  },
  {
    path: 'facility/create', component: CreateFacilityComponent,
  },
  {
    path: 'facility/update', component: UpdateFacilityComponent,
  },
  {
    path: 'facility/delete', component: DeleteFacilityComponent,
  },
  {
    path: 'contract', component: ListContractComponent,
  },
  {
    path: 'contract/create', component: CreateContractComponent,
  },
  {
    path: 'contract_detail/create', component: CreateContractDetailComponent,
  },
  {
    path: '', component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
    ListFacilityComponent,
    CreateFacilityComponent,
    DeleteFacilityComponent,
    UpdateFacilityComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent,
    CreateContractComponent,
    CreateContractDetailComponent,
    HomeComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
