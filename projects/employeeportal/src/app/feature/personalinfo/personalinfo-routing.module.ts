import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonalinfoComponent } from './personalinfo.component';

const personalinfoRoutes: Routes = [
  { path: '', component: PersonalinfoComponent },
  { path: 'address', loadChildren: () => import(`./address/address.module`).then(m => m.AddressModule) },
  { path: 'phone', loadChildren: () => import(`./phone/phone.module`).then(m => m.PhoneModule) },
  { path: 'photo', loadChildren: () => import(`./photo/photo.module`).then(m => m.PhotoModule) },
  { path: 'password', loadChildren: () => import(`./password/password.module`).then(m => m.PasswordModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(personalinfoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonalinfoRoutingModule { }
