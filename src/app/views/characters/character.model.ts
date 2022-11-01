import { Gender, Status } from 'src/app/constants/options';
import { Location } from '../locations/location.model';

export interface Origin {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: '';
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
  extras?: Array<string>;
}
