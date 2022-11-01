import { DIALOG_DATA } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { getIds } from 'src/app/constants/utils';
import { Character } from '../../characters/character.model';
import { CharacterService } from '../../characters/character.service';
import { Episode } from '../episode.model';

@Component({
  templateUrl: 'more-info.component.html',
  selector: 'app-episode-more-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeMoreInfoComponent {
  characters: Observable<Array<Character>>;
  constructor(
    @Inject(DIALOG_DATA) public data: { episode: Episode },
    private characterService: CharacterService
  ) {
    this.characters = characterService.get(getIds(data.episode.characters));
  }
}
