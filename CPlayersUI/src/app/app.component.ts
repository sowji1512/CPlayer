import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TOKEN_NAME, AuthenticationService } from './modules/authentication/authentication.service';
import { PlayerServiceService } from './modules/player/player-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CPlayersUI';
  isAvailable:boolean;
  movies:Array<any>;
  constructor(private authService:AuthenticationService) { 
    
      }
logout(){
  this.authService.deleteToken();
} 


 
  }





