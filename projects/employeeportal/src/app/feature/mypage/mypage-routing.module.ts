import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MypageComponent } from './mypage.component';

const mypageRoutes: Routes = [
  { path: '',
    component: MypageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mypageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MypageRoutingModule { }
