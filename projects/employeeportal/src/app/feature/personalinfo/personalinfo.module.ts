import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalinfoComponent } from './personalinfo.component';
import { RouterModule } from '@angular/router';
import { PersonalinfoRoutingModule } from './personalinfo-routing.module';
import { ContactWidgetModule } from './contact-widget/contact-widget.module';
import { ProfileWidgetModule } from './profile-widget/profile-widget.module';
import { TeamWidgetModule } from './team-widget/team-widget.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilePhotoModule } from '../../shared/profile-photo/profile-photo.module';
import { WidgetWrapperComponent } from '../../shared/widget-wrapper/widget-wrapper.component';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  declarations: [
    PersonalinfoComponent, WidgetWrapperComponent
  ],
  imports: [
    CommonModule,
    ContactWidgetModule,
    ProfileWidgetModule,
    TeamWidgetModule,
    PersonalinfoRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ProfilePhotoModule,
    LayoutModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PersonalinfoModule { }
