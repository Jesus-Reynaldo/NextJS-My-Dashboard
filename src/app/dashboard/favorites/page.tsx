import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";
import { PokemonFavorite } from "@/pokemons/components/PokemonFavorite";



export const metadata = {
  title: '151 Pokemon',
  description: '151 Pokemon',
};


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokémons Favoritos <small className="bg-blue-500">Global estático</small></span>
      
      <PokemonFavorite />

    </div>
  );
}


