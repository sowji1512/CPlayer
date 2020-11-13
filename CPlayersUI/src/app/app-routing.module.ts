import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { FavouritesComponent } from './modules/player/components/favourites/favourites.component';
import { SearchComponent } from './modules/player/components/search/search.component';
import { StatisticsComponent } from './modules/player/components/statistics/statistics.component';
const routes: Routes = [

  {
    path:'',
    children: [
      {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
  },
  {
    path:'player',
    children: [
      {
        path: 'favourites',
        component: FavouritesComponent
        
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
