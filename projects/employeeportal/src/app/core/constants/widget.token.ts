import { InjectionToken } from '@angular/core';
import { Widget } from '../models/widget.interface';

export const WIDGET = new InjectionToken<Widget>('Widget');
