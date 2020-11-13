import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Player } from '../../player';
import { MatDialog } from '@angular/material';
import { PlayerServiceService } from '../../player-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'player-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() player: Player;
  statsModal:boolean=false;
  @Input()
  addTofavourites: boolean;
  @Output()
  addPlayer = new EventEmitter();
  @Output()
  deletePlayer = new EventEmitter();

  playerBio: any;

  constructor(private dialog: MatDialog,private playerService:PlayerServiceService,private router: Router) { }


  addPlayerToFavourites() {
    
    this.addPlayer.emit(this.player);
  }

  removePlayerFromFavourites() {
    
    this.deletePlayer.emit(this.player);
  }

  //  viewPlayerDetails(player) {
  //    console.log('movie getting updated');
  //    console.log(player);
     
  //      const dialogRef = this.dialog.open(StatisticsComponent, {
  //        width: '90%',
  //        data: {obj:player}
  //      });
  
  //      dialogRef.afterClosed().subscribe(result => {
  //        console.log('The dialog was closed');
  //      });

     
  //  }

  viewStats(playerid) {
    this.statsModal = true;
    console.log(playerid);
    this.playerService.playerId=playerid;
    
    this.router.navigate(['/player/statistics']);
   
    // this.playerService.getPlayerStatistics(playerid).subscribe(
    //   data => {
    //     console.log('Response : ' + data);
    //     this.playerBio = data;
    //   });
  }


  ngOnInit() {
  }

}
