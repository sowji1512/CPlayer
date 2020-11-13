import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User();
  constructor(private authService: AuthenticationService,
              private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  


  registerUser() {
    const message = 'User Registered Successfully.Please Login !';
    const errorMessage = 'Email already exists! Please try with another email.';
    console.log('Register User data:', this.newUser);
    this.authService.registerUser(this.newUser).subscribe(data => {
      console.log('User registered', data);
      this.router.navigate(['/login']);
      this.snackBar.open(message, '', {
        duration: 10000,
        verticalPosition: 'top'
      });
    }, error => {
      if (error.status === 409) {
        this.snackBar.open(errorMessage, '', {
          duration: 3000,
          verticalPosition: 'top'
        });
      }
    });
  }
  login(){
    this.router.navigate(['/login']);
  }

}
