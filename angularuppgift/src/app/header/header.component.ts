import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService, private authService: AuthService) { }

  isLoggedIn: boolean = this.cookieService.check('isLoggedIn')

  public user = {}



  ngOnInit() {
    if(this.isLoggedIn) {
      this.authService.getUser().subscribe(data => this.user = data)
    }
    $(document).ready(function () {
      $('.sidenav').sidenav();
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
    this.cookieService.deleteAll();
  }
}
