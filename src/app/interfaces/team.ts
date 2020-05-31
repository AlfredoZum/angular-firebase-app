import { Player } from './player';
import { Countries } from './enumContry';

export interface Team {

  $key?: string;
  name: string;
  country: Countries;
  players: Player[];

}

