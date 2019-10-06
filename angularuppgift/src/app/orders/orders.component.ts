import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public products = {};

  ngOnInit() {
    this.getAllCards()
  }

  getAllCards() {
    this.authService.getCards().subscribe(data => this.products = data)
  }

}
