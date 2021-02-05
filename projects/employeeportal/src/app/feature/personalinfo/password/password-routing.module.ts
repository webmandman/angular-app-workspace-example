import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './password.component';

const passwordRoutes: Routes = [
  { path: '', component: PasswordComponent }
];







@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(passwordRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PasswordRoutingModule { }
