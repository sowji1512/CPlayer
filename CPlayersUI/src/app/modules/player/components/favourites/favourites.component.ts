import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../../player-service.service';
import { Player } from '../../player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  addTofavourites:boolean=true;
  players:Array<Player>;
  constructor(private playerService:PlayerServiceService,private route:ActivatedRoute) { 
    this.players=[];
  }

  ngOnInit() {

    this.playerService.getPlayersFromfavouriteList().subscribe((players)=> {  
      this.players.push(...players)
      console.log(players);
      
    })
  }

}
