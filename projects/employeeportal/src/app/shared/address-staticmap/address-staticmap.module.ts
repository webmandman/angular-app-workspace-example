import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressStaticMapComponent } from './address-staticmap.component';



@NgModule({
  declarations: [AddressStaticMapComponent],
  exports: [AddressStaticMapComponent],
  imports: [
    CommonModule
  ]
})
export class AddressFlatmapModule { }
