import { Component } from "@angular/core"

@Component({
    selector: 'page-404',
    template:`
    <div class="center">
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
    </div>
    <h3>Hey, cette page n'existe pas !</h3>
    <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
    Retour à l'accueil</a>
            `
})
export class PageNotFoundComponent{}