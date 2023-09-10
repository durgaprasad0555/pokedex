import React from "react";
import "./App.css";
import Pokedex from "../Pokedex/Pokedex";
import { pokemonData } from "../../Data/PokemonData";
import { PokemonSchema, PokemonSpriteSchema, UnpatchedPokemonSchema } from "../../types/pokemonSchema";


interface AppState{
    searchField:string;
    allPokemons:PokemonSchema[];
    searchedPokemons:PokemonSchema[];
    selectedPokemon:PokemonSchema |  undefined;
}





class App extends React.Component<any,AppState>{
  state={
    searchField:"",
    allPokemons:[],
    searchedPokemons:[],
    selectedPokemon:undefined

  }
  patchPokemonData =(pokemons:UnpatchedPokemonSchema[])=>{
       const patchedPokemons =pokemons.map((pokemon)=>{
        let parsedSprites:PokemonSpriteSchema={
          normal:undefined,
          animated:undefined
        };
        try{
          parsedSprites=pokemon.sprites &&  JSON.parse(pokemon.sprites);
        }catch(e){
          console.log("Exception while parsing the sprites:",e);
        }
        const patchedPokemon:PokemonSchema={
          ...pokemon,
          sprites:parsedSprites
        };
        return patchedPokemon;
       });
       return patchedPokemons;
  }
    componentDidMount(){
        // const pokeData=pokemonData;
        // console.log(pokeData);
        // Patch the stringgifed pokemon spring
          const patchedPokemons:PokemonSchema[]=this.patchPokemonData(
            pokemonData
          );
          
this.setState({
  allPokemons:patchedPokemons,
  searchedPokemons:patchedPokemons,

})

        // update the state  with the pathed pokemon
    }
    handleInputChange=(inputValue:string)=>{
    //  filter the ssearch pokemon
    const {allPokemons}=this.state;
    const searchedPokemons=allPokemons.filter(

      (pokemon:PokemonSchema)=>{
        return (
          pokemon.name && pokemon.name.toLowerCase()
          .includes(inputValue.toLowerCase())
        )
      }
    );
    this.setState({
      searchField:inputValue,
      searchedPokemons,
    })
    }
    handleClick=(pokemonName:string)=>{
      const { allPokemons}=this.state;
      // Find the selected from allpokemomns 
    const selectedPokemon=allPokemons.find(
      (pokemon:PokemonSchema)=>pokemon.name===pokemonName
    )
      // update the state
      this.setState({selectedPokemon})
    }
    render(){
       return <div className="App">
    <h1>Pokedex</h1>
    <Pokedex 
    searchedPokemons={this.state.searchedPokemons}
    selectedPokemon={this.state.selectedPokemon}
    
    onInputChange={this.handleInputChange}
    onPokemonClick={this.handleClick}
    />
        </div>
        
    }
}
export default App;