import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModules } from 'src/app/constants/material';
import { LocationCardComponent } from './components/location-card.component';
import { LocationsListComponent } from './components/locations-list.component';

@NgModule({
  declarations: [LocationCardComponent, LocationsListComponent],
  imports: [CommonModule, ...MaterialModules],
  exports: [LocationsListComponent],
})
export class LocationsModule { }
