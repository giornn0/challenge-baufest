import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModules } from 'src/app/constants/material';
import { CharacterCardComponent } from './components/character-card.component';
import { CharactersListComponent } from './components/characters-list.component';
import { CharacterCompareComponent } from './components/compare.component';

@NgModule({
  declarations: [
    CharacterCardComponent,
    CharactersListComponent,
    CharacterCompareComponent,
  ],
  imports: [CommonModule, ...MaterialModules],
  exports: [CharactersListComponent, CharacterCardComponent],
})
export class CharactersModule { }
