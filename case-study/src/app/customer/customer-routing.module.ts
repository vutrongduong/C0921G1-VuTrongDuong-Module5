import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {UpdateCustomerComponent} from './update-customer/update-customer.component';
import {DeleteCustomerComponent} from './delete-customer/delete-customer.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: 'customer', component: ListCustomerComponent,
  },
  {
    path: 'customer/create', component: CreateCustomerComponent,
  },
  {
    path: 'customer/update/:id', component: UpdateCustomerComponent,
  },
  {
    path: 'customer/delete/:id', component: DeleteCustomerComponent,
  },
];

@NgModule({
  declarations: [
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class CustomerRoutingModule {
}
