import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';
import { Observable } from 'rxjs/internal/Observable';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {

  public player$: Observable<Player[]>;
  public selectedPlayer: Player;
  public showModal = false;

  constructor( private playerService: PlayerService ) {}

  ngOnInit(): void {
    this.player$ = this.playerService.getPlayers();
  }

  newPlayer(){
    this.showModal = true;
    this.selectedPlayer = null;
    setTimeout( () => {
      window.location.replace('#open');
    });
  }

}
