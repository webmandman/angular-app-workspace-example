import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhotoComponent } from './photo.component';

const photoRoutes: Routes = [
  { path: '', component: PhotoComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(photoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhotoRoutingModule { }
