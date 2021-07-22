import { Injectable } from '@angular/core';
import { Produits } from '../shared/models/home';
import { PRODUITS } from '../shared/models/produits';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  produits : Produits[]=PRODUITS;
  constructor() { }
  getProduits () : Produits []
{
return this.produits;
}
ajouterProduits (f)
{
this.produits.push(f);
}
}
