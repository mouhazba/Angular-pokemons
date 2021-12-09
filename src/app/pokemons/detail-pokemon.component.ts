import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
 
@Component({
    selector: 'list-pokemon',
    templateUrl: './detail-pokemon.component.html',
    styleUrls: ['/app.component.css']
})
export class DetailPokemonComponent implements OnInit {
 
    pokemons!: Pokemon[] ;
    pokemon!: Pokemon;
    ids! :any;
 
    constructor(private route: ActivatedRoute, private router: Router) {}
 
    ngOnInit():void {
        this.pokemons = POKEMONS;
        
        this.ids = (this.route.snapshot.paramMap.get('id'));
        
         for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == this.ids) {
                this.pokemon = this.pokemons[i];
            }
        } 
    }
 
    goBack():void {
        this.router.navigate(['/pokemons']);
    }
 
}