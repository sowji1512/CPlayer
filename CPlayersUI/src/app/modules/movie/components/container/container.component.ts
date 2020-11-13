import { Component, OnInit, Input } from '@angular/core';
import { movie } from '../../movie';
import { MovieService } from '../../movie.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'movie-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  
  
@Input()
movies:Array<movie>;

@Input()
useWatchListApi:boolean;
  constructor(private movieService: MovieService, private snackbar: MatSnackBar) { 

  }

  ngOnInit() {

  
  }
  addMovieTowatchList(movie){
     
    movie.movieId=movie.id;

    this.movieService.addMovieTowatchList(movie).subscribe((movie) => {
      this.snackbar.open('movie added succesfully', '', {
        duration: 1000
      })

    });

  }
  deleteMovieFromwatchList(movie){

    let message=`${movie.title} deleted from u r watch list`;
   
    this.movieService.deleteMovieFromWatchList(movie).subscribe((movie)=>{
this.snackbar.open(message,'',{
  duration:1000

});
    });
    const index=this.movies.indexOf(movie);
    this.movies.splice(index,1);
  }
}
