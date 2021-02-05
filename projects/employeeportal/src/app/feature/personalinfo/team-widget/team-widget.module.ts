import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamWidgetComponent } from './team-widget.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [TeamWidgetComponent],
  imports: [
    CommonModule,
    LayoutModule,
    FlexLayoutModule
  ],
  exports: [
    TeamWidgetComponent
  ]
})
export class TeamWidgetModule { }
