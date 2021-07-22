import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tabShirts = [
    { Marque:'POLO',
      imageShirts : 'assets/img/shirt1.jfif',
      description:'polo shirt is characterised by white and crimson-red trims at the point collar and ribbed cuffs to celebrate the Lunar New Year – the first new moon of the lunisolar calendar. It’s crafted from lightweight cotton piqué to a streamlined profile with a mustard-yellow embroidered logo, side-split hem and quarter-button placket.Shown here with: Polo Ralph Lauren Sullivan slim-leg jeans, Converse Chuck 70 high-top canvas trainers and Barena Venezia Rocheo cotton-twill overshirt',
      Acheter : 0,
      disponible : true
    },
    { Marque : 'DESQUARED 2',
     imageShirts : 'assets/img/shirt2.jfif',
      description:'Black cotton Icon print T-shirt from DSQUARED2 featuring round neck, short sleeves, straight hem and Icon print. Color: black',
      Acheter : 0,
      disponible : true
  },
  { Marque : 'LUIS VUITTON',
    imageShirts : 'assets/img/shirt3.jfif',
    description:'Louis Vuitton Mens Short T-Shirts Black Tights $52.99 www.gomalllv.com',
    Acheter : 0,
    disponible : true
}
  ];

  tabShirt = [
    { Marque:'MANGO',
      imageShirts : 'assets/img/shirt4.jpg',
      description:'Mango womaens Short T-Shirts Black Tights $80.99 ',
      Acheter : 0,
      disponible : true
    },
    { Marque : 'VICTORIA SECRET',
     imageShirts : 'assets/img/shirt5.jpg',
     description:'VICTORIA SECRET Long Shirts Black Tights $70.99',
     Acheter : 0,
     disponible : true
  },
  { Marque : "LEVI'S",
    imageShirts : 'assets/img/shirt6.jfif',
    description:'Levis womaens Short T-Shirts white Tights $96.99',
    Acheter : 0,
    disponible : true
}
  ];

  tabShoes = [
    { Marque:'POLO',
      imageShoes : 'assets/img/shoes1.jfif',
      description:'From Polo Ralph Lauren, the Men added collar price $55.88' ,
      Acheter : 0,
      disponible : true
    },
    { Marque : 'Mark Nason',
     imageShoes : 'assets/img/shoes2.jfif',
      description:'Mark Nason the flexible and comfort shose price $89.22',
      Acheter : 0,
      disponible : true
  },
  { Marque : 'Columbia',
    imageShoes : 'assets/img/shoes3.jfif',
    description:'Columbia the best shoes for your life is easy to work with that price $44.25',
    Acheter : 0,
    disponible : true
}
  ];
  tabShoess = [
    { Marque:'Fancy',
      imageShoes : 'assets/img/Shoes4.jpg',
      description:'Fancy the best shoes for your life is easy to work with that price $85.25',
      Acheter : 0,
      disponible : true
    },
    { Marque : 'Dior',
     imageShoes : 'assets/img/shoes5.jpg',
      description:'Dior the best shoes for your life is easy to work with that price $40.25',
      Acheter : 0,
      disponible : true
  },
  { Marque : 'DOLCE&Gabanna',
    imageShoes : 'assets/img/shoes6.jpg',
    description:'DOLCE&Gabanna the flexible and comfort shose price $89.22',
    Acheter : 0,
    disponible : true
}
  ];



  constructor() { }

  ngOnInit(): void {
    
  }
  onAcheter(x) {

    x.Acheter++;
    
  }
  onRetirer(y){
    y.Acheter--;

  }
  afficheDesc(x)
  {
    x.descVisible = true;
  }
  cacherDesc(x)
  {
    x.descVisible = false;
  }
 
}
