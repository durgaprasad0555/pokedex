import React from "react";
import "./Pokedex.css";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import Searchbox from "../Searchbox/Searchbox";
import PokeList from "../PokeList/PokeList";
import { PokemonSchema } from "../../types/pokemonSchema";

interface PokedexProps{
  searchedPokemons:PokemonSchema[];
  selectedPokemon:PokemonSchema | undefined
  onInputChange:(inputValue:string)=>void
  onPokemonClick:(pokemonName:string)=>void
}
const Pokedex=({ searchedPokemons,
  selectedPokemon,
  onPokemonClick,
  onInputChange }:PokedexProps)=>{
  return(
    <div className="Pokedex-container">
        <div className="pokelist-container">
          <Searchbox onInputChange={onInputChange} />
          <PokeList
           onPokemonClick={ onPokemonClick}
           searchedPokemons={searchedPokemons} />
        </div>
        <div className="pokesearchresult-container">
        <PokeSearchResult  selectedPokemon={selectedPokemon}/>
        </div>
    </div>
  )
}
export default Pokedex;