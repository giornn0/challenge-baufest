import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './constants/material';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsDec } from './components/components';
import { ReactiveFormsModule } from '@angular/forms';
import { CharactersModule } from './views/characters/characters.module';
import { LocationsModule } from './views/locations/locations.module';
import { EpisodesModule } from './views/episodes/episodes.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, ...ComponentsDec],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ...MaterialModules,
    ReactiveFormsModule,
    CharactersModule,
    EpisodesModule,
    LocationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
