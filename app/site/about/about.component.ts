import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import {Produits } from '../shared/models/home';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public files: any[];

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
  }
  ajouterFilm(nom,desc,prix)
  {
        var x = new Produits ();
        x.marque=nom;
        x.description=desc;
        x.prix=prix;
        x.descVisible=false;
        this.homeService.ajouterProduits(x);
        alert ("Your item is successfully added");
  }
}

