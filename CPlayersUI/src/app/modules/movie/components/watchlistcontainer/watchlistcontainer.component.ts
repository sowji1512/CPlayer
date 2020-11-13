import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { ActivatedRoute } from '@angular/router';
import { movie } from '../../movie';

@Component({
  selector: 'movie-watchlistcontainer',
  templateUrl: './watchlistcontainer.component.html',
  styleUrls: ['./watchlistcontainer.component.css']
})
export class WatchlistcontainerComponent implements OnInit {
  useWatchListApi:boolean=true;
  movies:Array<movie>;
  constructor(private movieService:MovieService,private route:ActivatedRoute) { 
    this.movies=[];
  }

  ngOnInit() {

    this.movieService.getMoviesFromwatchList().subscribe((movies)=> {  
      this.movies.push(...movies)
      console.log(movies);
      
    })
  }

}
