import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListPokemonComponent } from "./list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon.component";
import { SuppressionPokemon } from "./confirmation-sup";
import { AddPokemonComponent } from "./add-pokemon.component";
import { AuthGuard } from "../auth-guard.service";


const pokemonRoutes:Routes=[
     {
        path:'pokemon',
        canActivate:[AuthGuard],
        children:[
        {path:'all', component:ListPokemonComponent},
        {path:'add', component:AddPokemonComponent},
        {path:'edit/:id', component:EditPokemonComponent},
        {path:'suppression/:id', component:SuppressionPokemon},
        {path:':id', component:DetailPokemonComponent}
        ]                                     
    }
     
    /* 
    {path:'pokemons', component:ListPokemonComponent},
    {path:'pokemon/edit/:id', component:EditPokemonComponent, canActivate:[AuthGuard]},
    {path:'pokemon/add', component:AddPokemonComponent},
    {path:'pokemon/suppression/:id', component:SuppressionPokemon},
    {path:'pokemon/:id', component:DetailPokemonComponent} */
]
@NgModule({
    imports:[RouterModule.forChild(pokemonRoutes)],

    exports:[
        RouterModule
    ]
})
export class PokemonRoutingModule{}