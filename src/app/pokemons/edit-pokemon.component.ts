import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,  Params} from "@angular/router";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemons.service";


@Component({
    selector:"edit-component",
    styleUrls:['/pokemon-form.component.css'],
    templateUrl:'./pokemon.edit.component.html'
    /* template:`
        <h2 class="header center">Editer :  {{ pokemon?.name }}</h2>
        <p>
            <img *ngIf=" pokemon " [src]="pokemon.picture">
        </p>
        <pokemon-form [pokemon]="pokemon" [texteFromParent]="texte"> </pokemon-form>
    ` */
})
export class EditPokemonComponent implements OnInit{

    pokemon!:Pokemon;
    id! : any;

    constructor(private route:ActivatedRoute, private pokemonServie:PokemonService){
        
    }

    ngOnInit(){
        //this.ids = this.route.snapshot.paramMap.get('id');

        this.id = this.route.snapshot.params['id'];
        this.pokemon = this.pokemonServie.getPokemon(+this.id);
    }
}