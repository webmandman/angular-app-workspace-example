import { Component, Input } from '@angular/core';
import { WIDGET } from '../../../core/constants/widget.token';
import { Widget } from '../../../core/models/widget.interface';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.scss'],
  providers: [
    {provide: WIDGET, useExisting: ProfileWidgetComponent}
  ]
})
export class ProfileWidgetComponent implements Widget{

  public title = 'My Personal Information';

  @Input() userinfo: User;

}
