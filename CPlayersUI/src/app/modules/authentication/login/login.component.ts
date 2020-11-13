import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= new User();

  constructor(private authService: AuthenticationService,  private snackBar: MatSnackBar,private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    
    console.log('Login user', this.user);
    const message = 'Invalid Credentials';
    this.authService.loginUser(this.user).subscribe(data => {
      console.log('Login Successful');
      if (data['token']) {
        console.log(data['token']);
        this.authService.setToken(data['token']);
        this.router.navigate(['/player/search']);
      }

    }, error => {
      if (error.status === 401) {
        this.snackBar.open(message, '', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }
    });




  }
}
