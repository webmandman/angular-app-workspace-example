import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AddressComponent } from './address.component';
import { AddressVerifyComponent } from './verify/verify.component';
import { AddressRoutingModule } from './address-routing.module';
import { AddressFormComponent } from './form/form.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { AddressFlatmapModule } from '../../../shared/address-staticmap/address-staticmap.module';

@NgModule({
  declarations: [
    AddressComponent,
    AddressVerifyComponent,
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    RippleModule,
    FlexLayoutModule,
    LayoutModule,
    AddressFlatmapModule
  ]
})
export class AddressModule { }
