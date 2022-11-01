import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../character.model';

@Component({
  selector: 'app-characters-list',
  templateUrl: 'characters-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListComponent {
  @Input() characters?: Observable<Array<Character>> | null;
  @Input() simple = false;
}
