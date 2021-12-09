import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'detail-pokemon',
  templateUrl:'/list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
  //tableau de pokemons faisant referance à la classe Pokemon dans pokemons.ts
  pokemons! : Pokemon[];

  constructor(private router:Router){}
 
  ngOnInit():void{
    // on assigne ici pokemon car son contenant vient d'ailleurs
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon:Pokemon):void{
      let link = ['/pokemon', pokemon.id];
      this.router.navigate(link);
  }

}
