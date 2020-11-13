import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/authentication/authentication.service';

@Component({
  selector: 'app-player-nav',
  templateUrl: './player-nav.component.html',
  styleUrls: ['./player-nav.component.css']
})
export class PlayerNavComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.authService.deleteToken();
    this.router.navigate(['/login']);
  }
}
