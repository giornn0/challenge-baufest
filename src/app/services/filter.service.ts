import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Selector } from '../components/selector.component';
import { genderOptions, statusOptions } from '../constants/options';
import { ApiResponse } from '../constants/response.model';
import { ApiRoutes } from '../constants/routes';
import { cleanseEmpty, resultMapper } from '../constants/utils';

export interface Filter {
  filter: string;
  label: string;
  options?: Array<Selector>;
}

export interface QueryFilters {
  [key: string]: any;
}
export const filterParams: { [key: string]: Array<Filter> } = {
  [ApiRoutes.Location]: [
    { filter: 'name', label: 'Nombre' },
    { filter: 'type', label: 'Tipo' },
    { filter: 'dimension', label: 'Dimensión' },
  ],
  [ApiRoutes.Character]: [
    { filter: 'name', label: 'Nombre' },
    { filter: 'status', label: 'Estado', options: statusOptions },
    { filter: 'species', label: 'Especie' },
    { filter: 'type', label: 'Tipo' },
    { filter: 'gender', label: 'Género', options: genderOptions },
  ],
  [ApiRoutes.Episode]: [
    { filter: 'name', label: 'Nombre' },
    { filter: 'episode', label: 'Código' },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  #current = new BehaviorSubject<ApiRoutes>(ApiRoutes.Character);
  #filters = new Subject<Array<Filter>>();
  constructor(private http: HttpClient) {
    this.#current.subscribe((val) => this.#filters.next(filterParams[val]));
  }

  get current(): ApiRoutes {
    return this.#current.value;
  }
  get current$() {
    return this.#current.asObservable();
  }
  get filters() {
    return this.#filters.asObservable();
  }
  setRoute(route: ApiRoutes) {
    this.#current.next(route);
  }
  find<T>(filters: QueryFilters): Observable<Array<T>> {
    const params = cleanseEmpty(filters);
    return this.http
      .get<ApiResponse<Array<T>>>(
        `${environment.apiURL}/${this.#current.value}`,
        {
          params,
        }
      )
      .pipe(map(resultMapper));
  }
}
