import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BorderCardDirective } from "./border-card-directive";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonRoutingModule } from "./pokemons-routing.module";
import { PokemonService } from "./pokemons.service";


@NgModule({
    imports:[CommonModule, PokemonRoutingModule, FormsModule],
    declarations:[
        ListPokemonComponent,DetailPokemonComponent,EditPokemonComponent, PokemonFormComponent,
        BorderCardDirective,PokemonTypeColorPipe,
        ],
    providers:[PokemonService]

})
export class PokemonModule{}
