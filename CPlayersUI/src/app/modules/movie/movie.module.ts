import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieService } from './movie.service';
import { ContainerComponent } from './components/container/container.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatCardModule, MatSnackBarModule, MatDialogModule, MatInputModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import { WatchlistcontainerComponent } from './components/watchlistcontainer/watchlistcontainer.component';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [ ThumbnailComponent, ContainerComponent, WatchlistcontainerComponent, TmdbContainerComponent, MovieDialogComponent, SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,MatDialogModule,
MatInputModule,
     MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatSnackBarModule,FormsModule
  ],
  entryComponents:[MovieDialogComponent],
  exports:[
    ThumbnailComponent,SearchComponent,ContainerComponent,AppRoutingModule,MovieDialogComponent,WatchlistcontainerComponent
  ],
  providers: [MovieService],

  
})
export class MovieModule { }
