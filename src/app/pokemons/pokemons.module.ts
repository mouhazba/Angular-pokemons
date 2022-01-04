import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddPokemonComponent } from "./add-pokemon.component";
import { BorderCardDirective } from "./border-card-directive";
import { SuppressionPokemon } from "./confirmation-sup";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonRoutingModule } from "./pokemons-routing.module";
import { PokemonService } from "./pokemons.service";
import { SearchPokemon } from "./searchPokemon";
import { LoaderComponent } from "../loaderComponent";

@NgModule({
    imports:[CommonModule, PokemonRoutingModule, FormsModule],
    declarations:[
        ListPokemonComponent,
        DetailPokemonComponent,
        EditPokemonComponent, 
        PokemonFormComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        SuppressionPokemon,
        AddPokemonComponent,
        SearchPokemon,
        LoaderComponent
        ],
    providers:[PokemonService]

})
export class PokemonModule{}
