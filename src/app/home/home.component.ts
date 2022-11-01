import { Dialog, DialogConfig } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { stdDialogConfig } from '../constants/material';
import { options } from '../constants/options';
import { ApiRoutes } from '../constants/routes';
import {
  Filter,
  FilterService,
  QueryFilters,
} from '../services/filter.service';
import { Character } from '../views/characters/character.model';
import { CharacterCompareComponent } from '../views/characters/components/compare.component';
import { Episode } from '../views/episodes/episode.model';
import { Location } from '../views/locations/location.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  togglerOptions = options;
  current: Observable<ApiRoutes>;
  filters: Observable<Array<Filter>>;
  apiRoutes = ApiRoutes;
  characters?: Observable<Array<Character>>;
  episodes?: Observable<Array<Episode>>;
  locations?: Observable<Array<Location>>;
  dialogConfig: DialogConfig = { ...stdDialogConfig, width: 'fit-content' };

  constructor(private filterService: FilterService, private dialog: Dialog) {
    this.filters = filterService.filters;
    this.current = filterService.current$;
  }

  ngOnInit(): void { }

  change(event: ApiRoutes) {
    this.filterService.setRoute(event);
  }
  makeRequest(filters: QueryFilters) {
    switch (this.filterService.current) {
      case ApiRoutes.Episode:
        this.episodes = this.filterService.find<Episode>(filters);
        break;
      case ApiRoutes.Character:
        this.characters = this.filterService.find<Character>(filters);
        // .subscribe((res) => (this.characters = res));
        break;
      case ApiRoutes.Location:
        this.locations = this.filterService.find<Location>(filters);
        break;
    }
  }
  showCompare() {
    this.dialog.open(CharacterCompareComponent, this.dialogConfig as any);
  }
}
