import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.scss']
})
export class CocktailsDetailsComponent implements OnInit {
 cocktail : Cocktail = {
  name: "Mojito",
  img:'https://boiremixologie.com/files/medias/_imageCarrousel/mojito.jpg',
  description: 'Au fond d’un verre de type Highball, piler les quartiers de lime, les 10 feuilles de menthe et le sirop simple. Verser ensuite la glace et les 2 oz de rhum, puis secouer au shaker. Verser dans un verre puis ajouter 60 ml de soda.'
}

  constructor(){}
  ngOnInit() {}
}
