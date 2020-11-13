import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlayerServiceService } from '../../player-service.service';
import { ScrollStrategyOptions, ScrollStrategy } from '@angular/cdk/overlay';
import { Player } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
@Input()
  player:Player;
  playerBio:any;
  stats:any;
  noOdi:boolean=false;
  constructor(private playerService:PlayerServiceService) {


   
   }


 

   
  ngOnInit() {
console.log(this.player);
this.playerService.getPlayerStatistics(this.playerService.playerId).subscribe((data)=>{
  console.log(data);
   this.playerBio=data;

})
   
  }

}
