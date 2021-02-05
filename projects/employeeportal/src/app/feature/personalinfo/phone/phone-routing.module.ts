import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './phone.component';

const phoneRoutes: Routes = [
  { path: '', component: PhoneComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(phoneRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhoneRoutingModule { }
