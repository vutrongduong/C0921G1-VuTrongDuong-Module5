import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
  ]
})
export class CustomerModule {
}
