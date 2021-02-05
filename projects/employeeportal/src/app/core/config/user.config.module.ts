import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { UserConfigService } from './user.config.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (config: UserConfigService) => {
        return () => config.load();
      },
      deps: [UserConfigService],
      multi: true
    }
  ]
})
export class UserConfigModule { }
