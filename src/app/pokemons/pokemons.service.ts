import { Injectable } from "@angular/core";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService{
    //retourner tous les pokemons
    getPokemons():Pokemon[]{
        return POKEMONS
    }
    //pokemons!:Pokemon;
    //retourne le pokemon avec son identifiant en parametre
    getPokemon(id:number):any{
        let pokemons = this.getPokemons();
        for(let index = 0; index<pokemons.length; index ++){
             if(id === pokemons[index].id){
                return pokemons[index];
             }  
        }
      
    }

    getPokemonType():Array<string>{
        return[
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik','Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }
}