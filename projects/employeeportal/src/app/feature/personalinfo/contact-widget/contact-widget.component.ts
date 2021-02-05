import { Component, Input } from '@angular/core';
import { WIDGET } from '../../../core/constants/widget.token';
import { Widget } from '../../../core/models/widget.interface';
import { Address } from '../../../core/models/address';
import { User } from '../../../core/models/user';
import { PhonePipe } from '../../../shared/pipes/phone.pipe';

@Component({
  selector: 'app-contact-widget',
  templateUrl: './contact-widget.component.html',
  styleUrls: ['./contact-widget.component.scss'],
  providers: [
    {provide: WIDGET, useExisting: ContactWidgetComponent}
  ]
})
export class ContactWidgetComponent implements Widget {

  public title = 'My Contact Information';

  @Input() address: Address;
  @Input() userinfo: User;

}
