import { Component, OnInit, Input, signal, effect, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnChanges{
  @Input() option: string = "";
  @Input() value1 : string | number = "";
  pokemons : Pokemon[] = [];

  constructor(private api: ApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    switch (this.option) {
      case undefined:
        this.api.getAllPokemons().then(pokemons => {
          this.pokemons = pokemons;
        });
      break;
      case "type":
        this.api.getPokemonsByType(this.value1).then(pokemons => {
          this.pokemons = pokemons;
        });
      break;
      case "generation":
        this.api.getPokemonsByGeneration(this.value1).then(pokemons => {
          this.pokemons = pokemons;
        });
      break;
    }
  }


}