import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemons/pokemons.module';
import { PageNotFoundComponent } from './page-not-foud.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login-component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    PokemonModule,
    LoginRoutingModule,//trés importer l'ordre ici login vient en premier
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false} ),
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
