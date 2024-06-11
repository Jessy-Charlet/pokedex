import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
import { TypePokemon } from '../interfaces/TypePokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  public async getAllPokemons(): Promise<Pokemon[]> {
    return fetch("https://pokebuildapi.fr/api/v1/pokemon")
      .then(res => res.json());
  }

  public async getPokemonsByGeneration(generation: number | string = 1): Promise<Pokemon[]> {
    return fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/" + generation)
      .then(res => res.json());
  }

  public async getPokemonsByType(type: string | number = ""): Promise<Pokemon[]> {
    return fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
      .then(res => res.json());
  }

  public async getPokemonsById(id: number = 1): Promise<Pokemon> {
    const pokemon = await fetch("https://pokebuildapi.fr/api/v1/pokemon/" + id)
      .then(res => res.json());

    // const evolutionPromises :Promise<Pokemon>[] = [];
    // pokemon.apiEvolutions.forEach((evo : Pokemon) => {
    //   const evolutionPromise = fetch("https://pokebuildapi.fr/api/v1/pokemon/"+ evo.pokedexId)
    //   .then(res=>res.json());
    //   evolutionPromises.push(evolutionPromise);
    // });


    const evolutionPromises: Promise<Pokemon>[] = pokemon.apiEvolutions.map((evo: Pokemon) => {
      return fetch("https://pokebuildapi.fr/api/v1/pokemon/" + evo.pokedexId).then(res => res.json());
    });
    pokemon.evolutions = await Promise.all(evolutionPromises)

    if (pokemon.apiPreEvolution != "none"){
      pokemon.preEvolution = await fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemon.apiPreEvolution.pokedexIdd)
      .then(res => res.json());
    }
    return pokemon;
  }

  public async getAllTypes(): Promise<TypePokemon[]> {
    return fetch("https://pokebuildapi.fr/api/v1/types/")
      .then(res => res.json());
  }
}