'use client'
import { Provider } from 'react-redux';
import { store } from './index';
import { useEffect } from 'react';
import { setFavoritePokemons } from './pokemon/pokemons';
interface Props{
  children: React.ReactNode
}

export const Providers = ({children}:Props) => {
  useEffect(()=>{
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemon')??'{}')
    store.dispatch(setFavoritePokemons(favorites))
  },[])
  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}
