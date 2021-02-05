import { Component, Input } from '@angular/core';
import { WIDGET } from '../../../core/constants/widget.token';
import { Widget } from '../../../core/models/widget.interface';
import { User } from '../../../core/models/user';
import { Supervisor } from '../../../core/models/supervisor';

@Component({
  selector: 'app-team-widget',
  templateUrl: './team-widget.component.html',
  styleUrls: ['./team-widget.component.scss'],
  providers: [
    {provide: WIDGET, useExisting: TeamWidgetComponent}
  ]
})
export class TeamWidgetComponent implements Widget {

  public title = 'My Team';

  @Input() supervisor: Supervisor;
  @Input() userinfo: User;

}
