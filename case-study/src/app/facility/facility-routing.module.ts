import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import {UpdateFacilityComponent} from './update-facility/update-facility.component';
import {CreateFacilityComponent} from './create-facility/create-facility.component';
import {DeleteFacilityComponent} from './delete-facility/delete-facility.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: 'list',
    component: ListFacilityComponent
  },
  {
    path: 'update/:id',
    component: UpdateFacilityComponent
  },
  {
    path: 'create',
    component: CreateFacilityComponent
  },
  {
    path: 'delete',
    component: DeleteFacilityComponent
  }
];

@NgModule({
  declarations: [
    ListFacilityComponent,
    UpdateFacilityComponent,
    CreateFacilityComponent,
    DeleteFacilityComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class FacilityRoutingModule {
}
