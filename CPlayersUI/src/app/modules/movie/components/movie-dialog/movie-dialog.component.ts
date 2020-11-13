import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MovieService } from '../../movie.service';
import { movie } from '../../movie';

@Component({
  selector: 'movie-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.css']
})
export class MovieDialogComponent implements OnInit {
  movie:movie;
  comments:string;
  actiontype:string;

  constructor(public snackbar:MatSnackBar,public dialogRef:MatDialogRef<MovieDialogComponent>,@Inject(MAT_DIALOG_DATA)
  public data:any,private movieservice:MovieService) {
this.comments=data.obj.comments;
this.movie=data.obj;
this.actiontype=data.actionType;
   }

  ngOnInit() {
    console.log(this.data);
    
  }
  onNoClick(){
    this.dialogRef.close();
  }

  updateComments(){
    console.log("comments",this.comments);
    this.movie.comments=this.comments;
    this.dialogRef.close();
    this.movieservice.updateComments(this.movie).subscribe(movie=>{
      this.snackbar.open("Movie Updated successfully","",{
        duration:1000
      })
    })
    
  }
}
