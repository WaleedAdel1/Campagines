import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  product: Product;
  languageWord = false;

  constructor() { }

  ngOnInit() {
  }
  changeDirection() {
    this.languageWord = ! this.languageWord;
    console.log('changed');
  }
}
