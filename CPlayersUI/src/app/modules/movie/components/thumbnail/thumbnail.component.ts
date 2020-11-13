import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { movie } from '../../movie';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MovieService } from '../../movie.service';
import { MatSnackBarModule,  } from '@angular/material';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';

@Component({
  selector: 'movie-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  @Input() movie: movie;
  @Input()
  useWatchListApi: boolean;

  @Output()
  addMovie = new EventEmitter();

  @Output()
  deleteMovie = new EventEmitter();

  @Output()
  updateMovie = new EventEmitter();

  imagePrefix: string;
  constructor(private dialog: MatDialog, private snackbar: MatSnackBar) {

  }

  ngOnInit() {

  }
  addMovieTowatchList() {
    
    this.addMovie.emit(this.movie);
    
    
   
  }

  deleteMovieFromwatchList() {
    this.deleteMovie.emit(this.movie);
 
  }

  updateComments(actionType) {
    console.log('movie getting updated');
   
   
      const dialogRef = this.dialog.open(MovieDialogComponent, {
        width: '400px',
        data: {obj: this.movie, actionType: actionType}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
   
  
  
 
  }
}
