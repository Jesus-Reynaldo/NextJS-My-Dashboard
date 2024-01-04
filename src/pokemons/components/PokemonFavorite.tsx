'use client'

import { PokemonGrid } from '..'
import { useAppSelector } from '@/store'
import { useEffect, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonFavorite = () => {
  const pokemonFavorites = useAppSelector(state => state.pokemons.favorites)
  const favorites = Object.values(pokemonFavorites)
  const [pokemons, setPokemons] = useState(favorites)

  return (
    <>
      {
        favorites.length === 0
        ? <NoFavorites />
        : <PokemonGrid pokemons={favorites} />
      }  
    </>
  )
}

export const NoFavorites= () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay  favorites</span>
    </div>
  )
}

