import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';
import {DeleteEmployeeComponent} from './employee/delete-employee/delete-employee.component';
import {CreateContractDetailComponent} from './contract_detail/create-contract-detail/create-contract-detail.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [{
  path: 'facility',
  loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)
}, {
  path: 'customer',
  loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
}, {
  path: 'contract',
  loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
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
    path: 'contract_detail/create', component: CreateContractDetailComponent,
  },
  {
    path: '', component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
