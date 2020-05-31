import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

// service
import { TeamService, teamsTableHeaders } from 'src/app/services/team.service';

// interfaces
import { Team } from 'src/app/interfaces/team';
import { Countries } from 'src/app/interfaces/enumContry';


@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {

  public teams$: Observable<Team[]>;
  public tableHeaders = teamsTableHeaders;

  constructor( private teamService: TeamService ) { }

  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams();
    this.teamService.getTeams().pipe( take(1) ).subscribe( teams => {
      if ( teams.length === 0 ){
        const team : Team = {
          name: 'MyAmazingTeam',
          country: Countries.Mexico,
          players: null,
        };
      }
    });
  }

}
