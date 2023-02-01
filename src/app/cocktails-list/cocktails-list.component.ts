import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent implements OnInit {
  cocktails: Cocktail[] = [{
    name: "Mojito",
    img:'https://boiremixologie.com/files/medias/_imageCarrousel/mojito.jpg',
    description: 'Au fond d’un verre de type Highball, piler les quartiers de lime, les 10 feuilles de menthe et le sirop simple. Verser ensuite la glace et les 2 oz de rhum, puis secouer au shaker. Verser dans un verre puis ajouter 60 ml de soda.'
  },{
    name: "Martini",
    img:'https://boiremixologie.com/files/medias/_imageCarrousel/capture-ecran-martini.jpg',
    description: '« Martini, shaken, not stirred », comme disait James Bond. Ce cocktail aurait été inventé après l’importation du vermouth italien Martini aux États-Unis. Un barman l’aurait alors mélangé à du gin, créant ainsi le cocktail le plus connu du monde.'

  },{
    name: "Margarita",
    img:'https://boiremixologie.com/files/medias/_imageCarrousel/margarita.jpg',
    description: 'La margarita est un cocktail rafraichissant à base de tequila inventée en 1948 par Margaret Sames, d’où le nom (Margarita est la traduction en espagnol du prénom Margaret). Fait intéressant : la margarita est le cocktail le plus commandé en Amérique du Nord.'

  }]

  constructor (){}
  ngOnInit(): void {
      
  }
}
