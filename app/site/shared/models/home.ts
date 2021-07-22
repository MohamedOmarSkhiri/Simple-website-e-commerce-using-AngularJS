export class Produits {

      marque?: string;
      
 description?: string;
        prix?: string;
        
descVisible? : boolean;
constructor(args: Produits = {}) {
this.marque = args.marque;
this.description = args.description;
this.prix = args.prix;
this.descVisible = args.descVisible;
}
}
