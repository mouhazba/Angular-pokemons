import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemons.service";

@Component({
    selector:'pokemon-search',
    templateUrl:'/searchPokemon.html',
    styleUrls:['../app.component.css']
})
export class SearchPokemon implements OnInit{
    private searchTerms = new Subject<string>();
    pokemons$:Observable<Pokemon[]>;

    constructor(private pkmservice:PokemonService, private router:Router){}
    ngOnInit(): void {
        this.pokemons$ = this.searchTerms.pipe(
            //attendre 300ms entre chaque requete
            debounceTime(300),

            //ignore la requete si c'est la meme
            distinctUntilChanged(),

            //pour chaque term de recherche on renvoie la liste de de pokemons correspondant
            switchMap((term:string) => this.pkmservice.searchPokemon(term))
        )
    }

    gotoDetail(pokemon:Pokemon):void{
        let link = ['pokemon', pokemon.id];
        this.router.navigate(link)
    }

    search(term:string):void{
        this.searchTerms.next(term);
    }
}