import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PokemonService } from "./pokemons.service";
import { Pokemon } from "./pokemon";

@Component({
    selector:'pokemon-form',
    templateUrl:'/pokemon-form.component.html',
    styleUrls:['/pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{
    //propriete d'entree du component
    @Input() pokemon!:Pokemon;
    index!:any;
    checked!:any;

    //type disponible pour un pokemon: Eau, Feu, etc
    types!: Array<string>
   
    constructor(private pokemonService:PokemonService, private router:Router){

    }
    ngOnInit(){
        //initialisation de la propriete du type
        this.types = this.pokemonService.getPokemonType();
    }

    //Determiner si le type passé en parametre appartien ou nom au pokemon en cours d'edition
    HasType(type:string):boolean{
        this.index =  this.pokemon.types.indexOf(type);
        // ~index => index -> -1 
        if(~this.index) return true;
        return false;
    }

    //Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokemon en cours d'edition
    SelectType($event:any, type:string):void{
        this.checked = $event.target.checked;
        if(this.checked){
            this.pokemon.types.push(type);
        }
        else{
            this.index = this.pokemon.types.indexOf(type);
            if(~this.index){
                this.pokemon.types.splice(this.index, 1);
            }
        }
    }

    //la methode appelée lorsque le formulaire est soumis
    onSubmit():void{
        console.log("submit form !");
        let link = ['/pokemon',this.pokemon.id];
        this.router.navigate(link);
    }
    isTypesValid(type:string):boolean{
        if(this.pokemon.types.length >=3 && !this.HasType(type)){
            return false;
        }
        return true;
    }

}