import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Direction } from 'src/app/constants/options';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-card',
  templateUrl: 'character-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent {
  @Input() character?: Character = {} as Character;
  @Input() simple = false;
  @Input() direction = Direction.Horizontal;
  directionOpt = Direction;
  random(maxIndex: number): number {
    return Math.floor(Math.random() * maxIndex);
  }
  constructor(private characterService: CharacterService) { }
  addToCompare() {
    this.characterService.addToCompare(this.character!);
  }
  removeCompare() {
    this.characterService.removeFromCompare(this.character!);
  }
  isListedToCompare(): boolean {
    return this.characterService.indexComparing(this.character!) > -1;
  }
}
