import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BorderCardDirective } from "./border-card-directive";
import { DetailPokemonComponent } from "./detail-pokemon.component";
import { ListPokemonComponent } from "./list-pokemon.component";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonRoutingModule } from "./pokemons-routing.module";
import { PokemonService } from "./pokemons.service";


@NgModule({
    imports:[CommonModule, PokemonRoutingModule],
    declarations:[
        ListPokemonComponent,BorderCardDirective,DetailPokemonComponent,PokemonTypeColorPipe],
    providers:[PokemonService]

})
export class PokemonModule{}
