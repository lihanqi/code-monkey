import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
