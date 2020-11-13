import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthNavComponent } from './auth-nav/auth-nav.component';

@NgModule({
  imports: [
    
    HttpClientModule,SharedModule,  
    AppRoutingModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthNavComponent
  ],
  providers: [AuthenticationService],
  exports: [RegisterComponent,LoginComponent,SharedModule
  ]
})
export class AuthenticationModule { }
