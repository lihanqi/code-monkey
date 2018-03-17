import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Codecola - Online Judge';

  constructor(public auth: AuthService) {}

  ngOnInit(){
    this.auth.initService().then(() => console.log("finished"));
  }



}
