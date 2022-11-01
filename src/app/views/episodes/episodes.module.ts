import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModules } from 'src/app/constants/material';
import { CharactersModule } from '../characters/characters.module';
import { EpisodeCardComponent } from './components/episode-card.component';
import { EpisodesListComponent } from './components/episodes-list.component';
import { EpisodeMoreInfoComponent } from './components/more-info.component';

@NgModule({
  declarations: [
    EpisodeCardComponent,
    EpisodeMoreInfoComponent,
    EpisodesListComponent,
  ],
  imports: [CommonModule, ...MaterialModules, CharactersModule],
  exports: [EpisodesListComponent],
})
export class EpisodesModule {}
