import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';
import { localStorageMiddleware } from '../middlewares/localstorage-middleware';


/*

*/
interface PokemonsState{
  favorites:{[key:string]:SimplePokemon},
}

// const getPokemonLocal = ()=>{
//   const pokemons = localStorage.getItem('favorite-pokemon')
//   const favorites = JSON.parse(pokemons || '{}')
//   return favorites
// }

const initialState:PokemonsState = {
  favorites:{}
  //...getPokemonLocal()
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action:PayloadAction<{[key:string]:SimplePokemon}> ){
      state.favorites = action.payload
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
      const pokemon = action.payload
      const {id} = pokemon
      if(!!state.favorites[id]){
        delete state.favorites[id]
      }
      else{
        state.favorites[id]=pokemon
      }
      localStorage.setItem('favorite-pokemon',JSON.stringify(state.favorites))
    },
  }
});

export const {toggleFavorite, setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer