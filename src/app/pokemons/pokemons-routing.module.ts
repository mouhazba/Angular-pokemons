import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";

const pokemonRoutes:Routes=[
    {path:'pokemons', component:ListPokemonComponent},
    {path:'pokemons/:id', component:DetailPokemonComponent}
]
@NgModule({
    imports:[RouterModule.forChild(pokemonRoutes)],

    exports:[
        RouterModule
    ]
})
export class PokemonRoutingModule{}