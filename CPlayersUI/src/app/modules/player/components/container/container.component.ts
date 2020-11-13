import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { PlayerServiceService } from '../../player-service.service';
import { Player } from '../../player';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';
import { StatisticsComponent } from '../statistics/statistics.component';


@Component({
  selector: 'player-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


@Input()
players:Array<Player>;


@Input()
addTofavourites:boolean;

playerdata:any;

  constructor(private dialog: MatDialog,private authService:AuthenticationService, private playerService:PlayerServiceService,private router: Router,private snackbar: MatSnackBar) { }

  ngOnInit() {
  }
  
 

  addPlayerToFavourites(player){     
   
    this.playerService.addPlayerTofavourites(player).subscribe((player) => {
      this.snackbar.open('player added to favourites succesfully', '', {
        duration: 1000
      })

    });

  }

  removePlayerFromFavourites(player){

    let message=`deleted from u r watch list`;
   
    this.playerService.deletePlayerFromFavourites(player).subscribe((player)=>{
this.snackbar.open(message,'',{
  duration:1000

});
    });
    const index=this.players.indexOf(player);
    this.players.splice(index,1);
  }
 
}
