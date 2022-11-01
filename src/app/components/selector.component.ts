import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiRoutes } from '../constants/routes';

export interface Selector {
  value: any;
  label: string;
}

@Component({
  templateUrl: 'selector.component.html',
  selector: 'app-selector',
})
export class SelectorComponent {
  @Input() options?: Array<Selector>;
  @Input() start?: Selector;
  @Output() changed = new EventEmitter<ApiRoutes>();
}
