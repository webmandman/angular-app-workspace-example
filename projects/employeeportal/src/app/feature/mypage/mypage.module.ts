import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypageComponent } from './mypage.component';
import { MypageRoutingModule } from './mypage-routing.module';
import { ProfilePhotoModule } from '../../shared/profile-photo/profile-photo.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PipesModule } from '../../shared/pipes/pipes.module';


@NgModule({
  declarations: [MypageComponent],
  imports: [
    CommonModule,
    MypageRoutingModule,
    ProfilePhotoModule,
    FlexLayoutModule,
    LayoutModule,
    PipesModule
  ]
})
export class MypageModule { }
