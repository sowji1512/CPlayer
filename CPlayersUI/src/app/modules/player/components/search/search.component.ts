import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerServiceService } from '../../player-service.service';


@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
players:Array<Player>;
  constructor(private playerService:PlayerServiceService) { }

  ngOnInit() {
  }

  onEnter(searchKey){
    console.log(searchKey);
    
    this.playerService.getAllPlayers(searchKey).subscribe((playersl) => {

      this.players=playersl;
      console.log(this.players);
      
    });

  }
}
