import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PlayerServiceService } from './player-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PlayerNavComponent } from './components/player-nav/player-nav.component';
import { SearchComponent } from './components/search/search.component';
import { ContainerComponent } from './components/container/container.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
  declarations: [ContainerComponent, SearchComponent,ThumbnailComponent, FavouritesComponent, StatisticsComponent, PlayerNavComponent],
  imports: [
   SharedModule,AppRoutingModule
  ],
  exports: [
    SharedModule,ContainerComponent,SearchComponent, ThumbnailComponent, FavouritesComponent
   ],
   providers: [PlayerServiceService,,{
    provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
  }],
})
export class PlayerModule { }
