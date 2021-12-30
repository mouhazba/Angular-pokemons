import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon.component";
import { SuppressionPokemon } from "./confirmation-sup";
import { AddPokemonComponent } from "./add-pokemon.component";

const pokemonRoutes:Routes=[
    {path:'pokemons', component:ListPokemonComponent},
    {path:'pokemon/edit/:id', component:EditPokemonComponent},
    {path:'pokemon/add', component:AddPokemonComponent},
    {path:'pokemon/suppression/:id', component:SuppressionPokemon},
    {path:'pokemon/:id', component:DetailPokemonComponent}
]
@NgModule({
    imports:[RouterModule.forChild(pokemonRoutes)],

    exports:[
        RouterModule
    ]
})
export class PokemonRoutingModule{}