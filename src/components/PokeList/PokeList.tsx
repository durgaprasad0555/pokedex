import { PokemonSchema } from "../../types/pokemonSchema";
import Pokecard from "../Pokecard/Pokecard";
import "./PokeList.css";

interface PokelistProps{
    searchedPokemons:PokemonSchema[];
    onPokemonClick:(pokemonName:string)=>void
}
const PokeList = ({searchedPokemons,onPokemonClick}:PokelistProps)=>{
    return(
        <div className="pokelist">
            {/* <Pokecard name="pikachu" />
            <Pokecard name="bulbasaur" />
            <Pokecard name="ivysaur" />
            <Pokecard name="venasaur" />
            <Pokecard name="charizard" /> */}
            {
                searchedPokemons.map((pokemon)=>{
                    return(
                        pokemon.name && (
                            <Pokecard 
                            onPokemonClick={onPokemonClick}
                        key={pokemon.id}
                        name={pokemon.name}
                        spriteUrl={pokemon.sprites.normal}
                        />
                        )
                    )
                })
            }
           
        </div>
    )
}
export default PokeList;
