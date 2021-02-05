import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PhoneComponent } from './phone.component';
import { PhoneFormComponent } from './form/form.component';
import { PhoneRoutingModule } from './phone-routing.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    PhoneComponent,
    PhoneFormComponent,
    CodeComponent
  ],
  imports: [
    CommonModule,
    PhoneRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    RippleModule,
    FlexLayoutModule,
    LayoutModule
  ]
})
export class PhoneModule { }
