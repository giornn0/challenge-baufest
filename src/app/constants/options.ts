import { Selector } from '../components/selector.component';
import { ApiRoutes } from './routes';

export const options: Array<Selector> = [
  { value: ApiRoutes.Character, label: 'Personajes' },
  { value: ApiRoutes.Episode, label: 'Episodios' },
  { value: ApiRoutes.Location, label: 'Ubicaciones' },
];
export enum Status {
  Alive = 'alive',
  Dead = 'dead',
  Unknown = 'unknown',
}
export enum Gender {
  Female = 'female',
  Male = 'male',
  Genderless = 'genderless',
  Unknown = 'unknown',
}

export const statusOptions: Array<Selector> = [
  { value: Status.Alive, label: 'Vivo' },
  { value: Status.Dead, label: 'Muerto' },
  { value: Status.Unknown, label: 'Desconocido' },
];
export const genderOptions: Array<Selector> = [
  { value: Gender.Female, label: 'Femenino' },
  { value: Gender.Male, label: 'Masculino' },
  { value: Gender.Genderless, label: 'Sin género' },
  { value: Gender.Unknown, label: 'Desconocido' },
];
export enum Direction {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
