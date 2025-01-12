import { Component } from '@angular/core';
import { AuthService } from 'src/app/authorization/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  roles="";
  isLoggedIn!:boolean;

  checkLoggedInUser(){
    this.isLoggedIn= this.authService.isLoggedIn();
    this.roles=this.authService.getUserRole();
  }
  logout(){
    this.authService.logout();
  }
  constructor(private authService:AuthService){
  }
}
