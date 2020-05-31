import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/interfaces/enumContry';
import { SquadNumber } from 'src/app/interfaces/enumSquadNumber';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {

  private team;
  public countries = Object.keys( Countries ).map( key => ( { label: key, key : Countries[key] } ) );
  public squadNumber = Object.keys( SquadNumber ).slice( Object.keys( SquadNumber ).length / 2 );

  constructor( private playerService: PlayerService, private teamService: TeamService ) { }

  ngOnInit(): void {

    this.teamService.getTeams().pipe( take(1) ).subscribe( teams => {
      this.team = teams[0];
    });

  }

  private newPlayer( playerFormValue ){
    const key = this.playerService.addPlayer( playerFormValue );
    const playerFormValueKey = {
      ...playerFormValue,
      key
    };
    const formattedTeam = {
      ...this.team,
      players: [ ...( this.team.players ? this.team.players : [] ), playerFormValueKey ]
    };
    this.teamService.editTeam( formattedTeam );
  }

}
