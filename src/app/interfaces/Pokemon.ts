export interface Pokemon {
   name: string,
   id: number,
   pokedexId: number,
   sprite: string,
   image: string,
   apiGeneration: number,
   apiTypes: Array<type>,
   apiEvolutions: Array<evolution>,
   evolutions: Array<Pokemon>,
   preEvolution: Pokemon | null,
   apiPreEvolution: {
      name: string | null | undefined,
      pokedexIdd: number | null | undefined
   }
   stats: {
      HP: number,
      attack: number,
      defense: number,
      special_attack: number,
      special_defense: number,
      speed: number
   }
}

type type = {
   name: string,
   image: string
}

type evolution = {
   name: string,
   pokedexId: number,
   sprite: string | null
}