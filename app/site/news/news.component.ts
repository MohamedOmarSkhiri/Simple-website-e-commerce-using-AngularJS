import { Component, OnInit } from '@angular/core';
import { Produits } from '../shared/models/home';
import { PRODUITS } from '../shared/models/produits';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  products: Produits[] = PRODUITS;

  constructor() { }

  ngOnInit(): void {
  }
  afficheDesc(x)
  {
    x.descVisible = true;
  }
  cacherDesc(x)
  {
    x.descVisible = false;
  }
  removeProduit(x)
  { this.products = this.products.filter(item => item != x);
  }

}
