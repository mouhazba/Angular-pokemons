import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";


@Injectable()
export class PokemonService{
    pokemons!:Pokemon[];

    constructor(private http:HttpClient){}

    private pokemonUrl = 'api/pokemons'; //point d'accés à notre API
    //retourner tous les pokemons
    /* getPokemons():Pokemon[]{
        return POKEMONS;
    } */

      //pokemons!:Pokemon;
    //retourne le pokemon avec son identifiant en parametre
  /*   getPokemon(id:number):any{
        this.pokemons = this.getPokemons();
        for(let index = 0; index<this.pokemons.length; index ++){
             if(id === this.pokemons[index].id){
                return this.pokemons[index];
             }  
        }
      
    } */

    
    //avec une requete http
    getPokemons():Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
            tap(_ => this.log(`fetched pokemons`)),
            catchError(this.handleErro('getPokemons', []))
        );
    }


    private handleErro<T>(operation= 'operation', result?:T){
        return (error:any):Observable<T> =>{
            console.log(error);
            console.log(`${operation} failed:$(error.message)`);
            
            return of(result as T);
        } 
    }
    log(log: string): void {
        console.info(log);
    }

    //<T> designe les types primitifs en typescript

    getPokemon(id:number):Observable<Pokemon>{
        const url = `${this.pokemonUrl}/${id}`; //synstaxe es6

        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log(`fetched pokemon id = ${id}`)),
            catchError(this.handleErro<Pokemon>(`getPokemon id = ${id}`))
        );
    }
  
    getPokemonType():Array<string>{
        return[
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik','Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }

    updatePokemon(pokemon:Pokemon):Observable<Pokemon>{
        const httpOptions= {
             headers: new HttpHeaders({'Content-Type':'application/json'})

        }

        return this.http.put<Pokemon>(this.pokemonUrl, pokemon, httpOptions).pipe(
            tap(_  => this.log(`updated pokemon id = ${pokemon.id}`)),
            catchError(this.handleErro<any>('updatePokemon'))
        )


    }
    deletePokemon(pokemon:Pokemon):Observable<Pokemon>{
        const url = `${this.pokemonUrl}/${pokemon.id}`;

        const httpOption={
            headers : new  HttpHeaders({'Content-Type':'application/json'})
        }
        return this.http.delete<Pokemon>(url, httpOption).pipe(
            tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
            catchError(this.handleErro<any>('deletePokemon'))
        )
    }

    //AJOUT D'UN POKEMON
    addPokemon(pokemon:Pokemon):Observable<Pokemon>{
        const httpOptions= {
            headers: new HttpHeaders({'Content-Type':'application/json'})
        }

        return this.http.post<Pokemon>(this.pokemonUrl, pokemon, httpOptions).pipe(
            tap((pokemon:Pokemon) => this.log(`added pokemon with = ${pokemon.id}`)),
            catchError(this.handleErro<Pokemon>('addPokemon'))
        )
    }
}
