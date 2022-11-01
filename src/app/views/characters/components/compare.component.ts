import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from 'src/app/constants/options';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters-compare',
  templateUrl: 'compare.component.html',
})
export class CharacterCompareComponent {
  comparing: Observable<Array<Character>>;
  directionOpt = Direction;
  constructor(private characterService: CharacterService) {
    this.comparing = characterService.comparing;
  }
}
