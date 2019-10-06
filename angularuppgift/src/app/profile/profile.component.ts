import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public user = {};

  ngOnInit() {
    this.getUserById()
  }

  getUserById() {
    return this.authService.getUser().subscribe(res =>{this.user = res})
  }

}
