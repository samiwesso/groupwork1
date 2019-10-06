import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public products = {};

  ngOnInit() {
    this.getAllCards()
    $(document).ready(function () {
      $('.modal').modal();
    });
  }

  getAllCards() {
    return this.authService.getCards().subscribe(res => {
      this.products = res;

      console.log(this.products);
    })
  }

}
