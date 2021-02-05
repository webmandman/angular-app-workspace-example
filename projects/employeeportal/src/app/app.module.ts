import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalinfoModule } from './feature/personalinfo/personalinfo.module';
import { MypageModule } from './feature/mypage/mypage.module';
import { AppBarModule } from './shell/app-bar/app-bar.module';
import { UserConfigModule } from './core/config/user.config.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonalinfoModule,
    MypageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonsModule,
    LabelModule,
    LayoutModule,
    AppBarModule,
    UserConfigModule
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
