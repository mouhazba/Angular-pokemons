import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { PokemonService } from './pokemons.service';
 
@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    styleUrls: ['../app.component.css']
})
export class DetailPokemonComponent implements OnInit {
 
    pokemon!: Pokemon;
    ids! :any;
 
    constructor(private route: ActivatedRoute, private router: Router, private pokemonService:PokemonService) {}
 
    ngOnInit():void {
        
        this.ids = this.route.snapshot.paramMap.get('id');
        this.pokemon = this.pokemonService.getPokemon(+this.ids)
    }
 
    goBack():void {
        this.router.navigate(['/pokemons']);
    }
    goEdit(pokemon:Pokemon):void{
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link)
    }
}