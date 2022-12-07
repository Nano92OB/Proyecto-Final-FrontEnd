import React from "react";
import { Link } from "react-router-dom";
import getHexType from "../services/typesFun";
import { Loading } from "./Lib";
const FilterPokemons = ({pokemonsList}) =>{
    return(
    
        <div className="container marginsPokemons">
        {
            pokemonsList.map((poke, key)=>{
            const numero= addLeadingZeros(poke.id,3);
            return <PokemonBank key={key} pokemon={poke} numero={numero}></PokemonBank>
        }
    )}
</div>)}

const PokemonBank = ({pokemon,numero}) =>{
    let colorPrincipal = getHexType(pokemon.type[0].toLowerCase())
    let colorSecundario
    if (pokemon.type[1]){
        colorSecundario = getHexType(pokemon.type[1])
    }
        return (
            <div className={"pokemonContainerBank borderPokemon"} style={{borderColor: colorPrincipal}} key={pokemon.id}>
                <Link to={`/${pokemon.id}`}>
                <div className="bodyPokemon">
                    <div className={"headerPokemon"} style={{color: colorPrincipal}}>#{numero}</div>
                    <div className="divImagePokemon">
                        <img alt="a" src={"/Sprites/Icons/" + pokemon.name.toLowerCase() + ".png"} className="imgPokemon"/>                
                    </div>
                </div>
                <div className={"footerPokemon"} style={{backgroundColor: colorPrincipal}}>{capitalizeFirstLetter(pokemon.name)}</div>
                </Link>
            </div>
        )}

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
export {PokemonBank,FilterPokemons}