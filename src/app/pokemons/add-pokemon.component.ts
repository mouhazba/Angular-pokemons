import { Component , OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemons.service";


@Component({
    selector:'pokemon-add',
    templateUrl:'./add-pokemon.html'

})
export class AddPokemonComponent implements OnInit{
    pokemon:Pokemon;
    constructor(private pkmnService:PokemonService, private router:Router){}
    ngOnInit(): void {
        this.pokemon = new Pokemon();
    }
}