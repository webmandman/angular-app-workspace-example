import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactWidgetComponent } from './contact-widget.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { PipesModule } from '../../../shared/pipes/pipes.module';


@NgModule({
  declarations: [
    ContactWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    FlexLayoutModule,
    RippleModule,
    PipesModule
  ],
  exports: [
    ContactWidgetComponent
  ]
})
export class ContactWidgetModule { }
