import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemons.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl:'/list-pokemon.component.html',
  styleUrls:['/pokemon-form.component.css']
})
export class ListPokemonComponent implements OnInit{
  //tableau de pokemons faisant reference à la classe Pokemon dans pokemons.ts
  pokemons! : Pokemon[];

  constructor(private router:Router, private pokemonService:PokemonService){}
 
  ngOnInit():void{
    // on assigne ici pokemon car son contenant vient d'ailleurs
    //this.pokemons = POKEMONS;
    //this.pokemons = this.pokemonService.getPokemons();
    this.pokemonService.getPokemons().subscribe(
      pokemons => this.pokemons = pokemons
    )
  }
 
  selectPokemon(pokemon:Pokemon):void{
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
  trackByPokemon(index:number, pokemon:Pokemon):any{
    let ide = pokemon.id;
    return ide;
   }
}
