import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticated: boolean = false;
  currentActivatedLink: any = null;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    // this.isAuthenticated = this.auth.isAuthenticated();
  }

  login() {
    this.auth.login();
    return false;
  }

  logout() {
    this.auth.logout();
    return false;
  }

  activateLink(linkElement: any) {
    if (this.currentActivatedLink) {
      this.currentActivatedLink.removeAttribute('id');
    }
    this.currentActivatedLink = linkElement;
    this.currentActivatedLink.id = "activateLink";
  }



}
