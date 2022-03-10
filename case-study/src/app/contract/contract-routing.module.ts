import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListContractComponent} from './list-contract/list-contract.component';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{
  path: 'contract', component: ListContractComponent,
},
  {path: 'contract/create', component: CreateContractComponent,}];

@NgModule({
  declarations: [
    ListContractComponent,
    CreateContractComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ContractRoutingModule {
}
