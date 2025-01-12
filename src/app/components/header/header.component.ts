import { Component } from '@angular/core';
import { AuthService } from 'src/app/authorization/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
roles="";
  isLoggedIn!:boolean;
  hide!:false;

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
