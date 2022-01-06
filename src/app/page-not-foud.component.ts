import { Component } from "@angular/core"

@Component({
    selector: 'page-404',
    template:`
    <div class="center">
    <h1>404 page not found</h1>
    </div>
    <h3>Hey, cette page n'existe pas !</h3>
    <a routerLink="/pokemon/all" class="waves-effect waves-teal btn-flat">
    Retour à l'accueil</a>
            `
})
export class PageNotFoundComponent{}