import { Component, input, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pokemon } from '../../interfaces/Pokemon';
import { TypePokemon } from '../../interfaces/TypePokemon';
import { ApiService } from '../../services/api.service';
import { SearchResultComponent } from '../search-result/search-result.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, SearchResultComponent, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private api: ApiService) { }
  pokemons: Pokemon[] = [];
  types: TypePokemon[] = [];
  result: Pokemon[] = [];
  input: string = "";
  searchClose: string = "hide";
  menu: string = "";
  menuBurger: string = "";


  ngOnInit(): void {
    this.api.getAllTypes().then(types => {
      this.types = types
    });
    this.api.getAllPokemons().then(pokemons => {
      this.pokemons = pokemons;
    });
    if (window.matchMedia("(orientation: portrait)").matches) {
      this.menu = "hide";
    }
    
  }


  public searchX() {
    this.searchClose = "hide";
    this.input = "";
    this.search();
  }

  public search() {
    this.result = [];
    this.pokemons.forEach(pokemon => {
      if (this.input != "" && pokemon.name.toLowerCase().startsWith(this.input.toLowerCase()) || pokemon.pokedexId == Number(this.input)) {
        this.result.push(pokemon);
      };
    });
    if (this.input != "") {
      this.searchClose = "";
    } else {
      this.searchClose = "hide"
    }
    return this.result;
  }

  public menuOpen() {
    if (this.menu == "hide") {
      this.menu = "show";
      this.menuBurger = "menuBurgerOpen";
    } else {
      this.menu = "hide";
      this.menuBurger = ""
    }
  }


}
