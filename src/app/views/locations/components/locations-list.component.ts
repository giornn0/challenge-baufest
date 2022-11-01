import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../location.model';

@Component({
  selector: 'app-locations-list',
  templateUrl: 'locations-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationsListComponent {
  @Input() locations?: Observable<Array<Location>> | null;
}
