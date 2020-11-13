import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { movie } from '../../movie';

@Component({
  selector: 'movie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
movies:Array<movie>;
  constructor(private movieservice:MovieService) { }

  ngOnInit() {
  }

  onEnter(searchKey){
    console.log(searchKey);
    this.movieservice.searchMovies(searchKey).subscribe(movies=>{
      this.movies=movies;
    })
    

  }
}
