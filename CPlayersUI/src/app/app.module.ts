import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { PlayerModule } from './modules/player/player.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes =[
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PlayerModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
   
    providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
