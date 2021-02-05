import { Component } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {

  public onTabSelect( e: SelectEvent ): void{
    if ( e.index === 1 ) { window.location.href = '/user/search'; }
    if ( e.index === 2 ) { window.location.href = 'https://contact'; }
  }

}
