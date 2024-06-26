import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { PokemonInfoService } from '../../services/pokemon.info.service';

@Component({
   selector: 'app-pokemon-details',
   standalone: true,
   imports: [RouterLink],
   templateUrl: './pokemon-details.component.html',
   styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {
   pokemon: Pokemon | null = null;
   time: number = 0;


   @Input() set id(pokemonId: number) {
      this.time = 0;
      this.api.getPokemonsById(pokemonId).then(pokemon => this.pokemon = pokemon)
         .catch(error => console.log(error));
         setTimeout(() =>{
            this.time = 1;
         },500);
   }

   public log(val: any) { console.log(val) }

   constructor(private api: ApiService) { }

   public colorType(pokemon: Pokemon) {
      let color = [];
      for (let type of pokemon.apiTypes) {
         switch (type.name) {
            case "Normal":
               color.push("#7c8384");
               break;
            case "Feu":
               color.push("#fea421");
               break;
            case "Plante":
               color.push("#3ab253");
               break;
            case "Eau":
               color.push("#59b0db");
               break;
            case "Sol":
               color.push("#cc783d");
               break;
            case "Combat":
               color.push("#d25164");
               break;
            case "Vol":
               color.push("#728cda");
               break;
            case "Poison":
               color.push("#e158cc");
               break;
            case "Roche":
               color.push("#c9b966");
               break;
            case "Insecte":
               color.push("#7fbf00");
               break;
            case "Spectre":
               color.push("#877bcf");
               break;
            case "Acier":
               color.push("#2b8796");
               break;
            case "\u00c9lectrik":
               color.push("#ffd13d");
               break;
            case "Psy":
               color.push("#ff7166");
               break;
            case "Glace":
               color.push("#6ed6cc");
               break;
            case "Dragon":
               color.push("#1d6bbc");
               break;
            case "T\u00e9n\u00e8bres":
               color.push("#545162");
               break;
            case "F\u00e9e":
               color.push("#f18cd7");
               break;
            default:
               color.push("sans type");
               break;
         }
      }
      return color;
   }
   public statsRange(value: number) {
      let stats = [];
      const result: number = value / 220 * 100;
      stats.push(result);
      if (result < 25) {
         stats.push('#d25164');
      } else if (result < 50) {
         stats.push('#ffd13d');
      } else {
         stats.push('#3ab253');
      }
      return stats;
   }

}
