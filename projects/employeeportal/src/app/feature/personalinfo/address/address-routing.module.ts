import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address.component';
import { AddressVerifyComponent } from './verify/verify.component';

const adddressRoutes: Routes = [
  { path: '', component: AddressComponent },
  { path: 'verified', component: AddressVerifyComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adddressRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AddressRoutingModule { }
