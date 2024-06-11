import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';

export const routes: Routes = [
    {path : "",component:HomeComponent},
    {path : "pokedex/:option/:value1",component:PokemonListComponent},
    {path : "pokedex",component:PokemonListComponent},
    {path : "pokemon-details/:id", component : PokemonDetailsComponent},
    {path :"**",component:NotFoundComponent} 
];
