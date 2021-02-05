import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar.component';
import { TabStripModule } from '@progress/kendo-angular-layout';



@NgModule({
  declarations: [AppBarComponent],
  imports: [
    CommonModule,
    TabStripModule
  ],
  exports: [
    AppBarComponent
  ]
})
export class AppBarModule { }
