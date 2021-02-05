import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileWidgetComponent } from './profile-widget.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilePhotoModule } from '../../../shared/profile-photo/profile-photo.module';


@NgModule({
  declarations: [
    ProfileWidgetComponent
  ],
  exports: [
    ProfileWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonsModule,
    RippleModule,
    LayoutModule,
    FlexLayoutModule,
    ProfilePhotoModule
  ]
})
export class ProfileWidgetModule { }
