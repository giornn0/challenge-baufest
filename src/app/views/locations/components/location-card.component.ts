import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Location } from '../location.model';

@Component({
  selector: 'app-location-card',
  templateUrl: 'location-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationCardComponent {
  @Input() location?: Location;
}
