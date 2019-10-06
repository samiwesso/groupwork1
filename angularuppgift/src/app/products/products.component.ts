import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  public products = {};

  ngOnInit() {
    this.getAllProducts() 
  }

  getAllProducts() {
    this.authService.getCards().subscribe(data => this.products = data)
  }

}
