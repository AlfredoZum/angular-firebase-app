import { Countries } from './enumContry';
import { SquadNumber } from './enumSquadNumber';

export interface Player {
  $key?: string;
  name: string;
  lastName: string;
  position: SquadNumber;
  weight: number;
  height: number;
  nationality: Countries;
  leftFooted: boolean;
}

