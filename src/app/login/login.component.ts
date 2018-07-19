import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.creds = {
      email: null,
      password: null
    };
  }

  login(event) {
    if (this.creds.email && this.creds.password) {
      this.router.navigate(commands: '[/dashboard]');
    } else {
      alert('wrong');
    }
  }

}
