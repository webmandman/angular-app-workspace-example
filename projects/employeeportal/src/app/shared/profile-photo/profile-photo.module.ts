import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePhotoComponent } from '../../shared/profile-photo/profile-photo.component';


@NgModule({
  declarations: [
    ProfilePhotoComponent
  ],
  exports: [
    ProfilePhotoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfilePhotoModule { }
