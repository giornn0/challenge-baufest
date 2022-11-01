import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiRoutes } from 'src/app/constants/routes';
import { environment } from 'src/environments/environment';
import { Character } from './character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  url = `${environment.apiURL}/${ApiRoutes.Character}`;
  #comparing = new BehaviorSubject<Array<Character>>([]);
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  get comparing() {
    return this.#comparing.asObservable();
  }
  addToCompare(character: Character) {
    const canPush = this.#comparing.value.length < 3;

    if (!canPush)
      return this.snackBar.open(
        'Ya se encuentra el máximo de personales comparando (3)',
        'Aceptar'
      );
    const value = [character, ...this.#comparing.value];
    this.#comparing.next(value);
    this.recalculate();
    return;
  }
  indexComparing(character: Character): number {
    return this.#comparing.value.findIndex((char) => char.id === character.id);
  }
  removeFromCompare(character: Character) {
    const value = this.#comparing.value.filter(
      (char) => char.id !== character.id
    );
    this.#comparing.next(value);
    this.recalculate();
  }

  recalculate() {
    const value = this.#comparing.value.map((char) => {
      const others = this.#comparing.value.filter((ch) => ch.id !== char.id);
      char.extras = others.map((ch) => {
        const sharedEpisodes = ch.episode.filter((episode) =>
          char.episode.includes(episode)
        );
        return sharedEpisodes.length
          ? `With ${ch.name} in ${sharedEpisodes.length} episode${sharedEpisodes.length > 1 ? 's' : ''
          }`
          : `Not shared any episode with ${ch.name}`;
      });
      return char;
    });
    this.#comparing.next(value);
  }

  get(id?: string): Observable<Array<Character>> {
    return this.http.get<Array<Character>>(`${this.url}/${id || ''}`);
  }
}
