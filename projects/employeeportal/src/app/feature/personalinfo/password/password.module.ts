import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { PasswordRoutingModule } from './password-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    RippleModule,
    FlexLayoutModule
  ]
})
export class PasswordModule { }
