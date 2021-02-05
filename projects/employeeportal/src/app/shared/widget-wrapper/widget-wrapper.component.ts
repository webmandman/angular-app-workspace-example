import { Component, ContentChild, Input } from '@angular/core';
import { WIDGET } from '../../core/constants/widget.token';
import { Widget } from '../../core/models/widget.interface';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent {

  @Input() widgetWidth: string;
  @ContentChild(WIDGET, { static: true })
    widget: Widget;

}
