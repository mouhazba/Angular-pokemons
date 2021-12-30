import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemons.service";

@Component({
    selector:'pokemon-supp',
    styleUrls:['./pokemon-form.component.css'],
    template:`
        <div class="center">
            <h2>Etes-vous sûr de vouloir supprimer</h2>
        <a class="waves-effect waves-light btn droite" (click)="retour()">Annuler</a>
        <a class="waves-effect red lighten-2 btn" (click)="confirmer(pokemon)">confirmer</a>
        </div>
    `
})
export class SuppressionPokemon implements OnInit{

    pokemon!:Pokemon;
    ids!:any;
    constructor(private http:HttpClient, private pkmService:PokemonService,private router:Router, 
        private route:ActivatedRoute){}
    ngOnInit(): void {
        this.ids = this.route.snapshot.paramMap.get('id');
        //this.pokemon = this.pokemonService.getPokemon(+this.ids)
        this.pkmService.getPokemon(+this.ids).subscribe(
            pokemon =>{ 
                this.pokemon = pokemon
            }
        )
    }
    confirmer(pokemon:Pokemon):void{
        this.pkmService.deletePokemon(pokemon).subscribe(
            _ => this.retour()
        )
    }
    retour():void{
        this.router.navigate(['/pokemons']);
    }
}