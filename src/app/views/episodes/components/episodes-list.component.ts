import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../episode.model';

@Component({
  selector: 'app-episodes-list',
  templateUrl: 'episodes-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesListComponent {
  @Input() episodes?: Observable<Array<Episode>> | null;
}
