import { Component, OnInit } from '@angular/core';
import { AuthService } from './authorization/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  roles = '';
  isLoggedIn!: boolean;
  username: string = this.authService.getUsername() ?? '';

  constructor(private authService: AuthService) {}
  checkLoggedInUser() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.roles = this.authService.getUserRole();
  }
  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    
  }
}
