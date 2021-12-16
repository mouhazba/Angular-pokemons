import { Injectable } from "@angular/core";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService{
    pokemons!:Pokemon[];
    //retourner tous les pokemons
    getPokemons():Pokemon[]{
        return POKEMONS;
    }

    //pokemons!:Pokemon;
    //retourne le pokemon avec son identifiant en parametre
    getPokemon(id:number):any{
        this.pokemons = this.getPokemons();
        for(let index = 0; index<this.pokemons.length; index ++){
             if(id === this.pokemons[index].id){
                return this.pokemons[index];
             }  
        }
      
    }
    getPokemonType():Array<string>{
        return[
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik','Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }
}
