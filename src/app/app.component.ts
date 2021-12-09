import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //tableau de pokemons faisant referance à la classe Pokemon dans pokemons.ts
  //pokemons! : Pokemon[];


 
  ngOnInit() {
    // on assigne ici pokemon car son contenant vient d'ailleurs
    //this.pokemons = POKEMONS;
  }
/*   selectPokemon(pokemon:Pokemon){
    console.log('Vous avez selectionné ' + pokemon.name);
  } */

}
