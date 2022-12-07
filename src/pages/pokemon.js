import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link, useParams } from "react-router-dom";
import getHexType from "../services/typesFun";
const Pokemon =({pokemons}) => {
    let id = useParams().id
    const pokemon = pokemons.find((poke) => poke.id == id)
    const [index,setIndex] = useState(pokemons.indexOf(pokemon)) 

    useEffect(()=>{
        setIndex(pokemons.indexOf(pokemon))
    },[pokemon])

    const nextPos=index+1;
    const beforePos=index-1;
    let colorPrincipal = null
    let colorSecundario = null
    if(pokemon){
        colorPrincipal = getHexType(pokemon.type[0].toLowerCase()) 
        console.log('principal' + colorPrincipal)
        if (pokemon.type[1]){
            colorSecundario = getHexType(pokemon.type[1].toLowerCase())
            console.log('secundario' + colorSecundario)
        }
    }
    return(
        <>
        {(!pokemon)?
<p>Cargando...</p>:
        <div className="pokemonContainer">
            <div className={"backgroundPokemon"} style={{backgroundColor: colorPrincipal}} > 
                <div className="divHeaderPokemonBank">
                    <div className="headerPokemonBank">
                        <Link to="/">
                        <div className="nameAndArrow">
                            <img src="/Sprites/Icons/Arrow.svg" alt="arrow" className="pokemonArrow"/>
                            <p className="pokemonName" style={{color:"black"}}>{capitalizeFirstLetter(pokemon.name)}</p>
                        </div>
                        </Link>
                        <div className="idPokemons">#{addLeadingZeros(pokemon.id,3)}</div>
                    </div>
                    <div className="divButtons">
                        {pokemons[beforePos] &&
                        <>
                            <Link to={`/${pokemons[beforePos].id}`}>
                                <div className="leftDot" >{'<'}</div>
                            </Link>
                        </>
                        }{pokemons[nextPos] &&
                        <>
                            <Link to={`/${pokemons[nextPos].id}`}>
                                <div className="rightDot" >{'>'}</div>
                            </Link></>
                        }
                        
                        <div><><img alt="pokeball" src="/Sprites/Icons/Pokeball.png" className="pokeballBackground"/></></div>
                    </div>

                </div>
                
            
                <img alt="a" src={"/Sprites/Icons/" + pokemon.name.toLowerCase() + ".png"} className="imgPokemonBig" />
                
 
                <div className="bodyPokemons">
                    
                    <div className="typesPokemon">
                    {(!pokemon.type[1])?
                        <>
                            <p className={"buttonPokemon"} style={{backgroundColor: colorPrincipal}}>{capitalizeFirstLetter(pokemon.type[0])}</p>
                        </>
                    :
                        <>
                            <p className={"buttonPokemon"} style={{backgroundColor: colorPrincipal}}>{capitalizeFirstLetter(pokemon.type[0])}</p>
                            <p className={"buttonPokemon"} style={{backgroundColor: colorSecundario}}>{capitalizeFirstLetter(pokemon.type[1])}</p>
                        </>
                    }
                        </div>
                    <div className="aboutPokemon">
                        <div className={"titleAbout"} style={{color:colorPrincipal}}>About</div>

                        <div className="weightAbout">
                            <div className="infoAboutStat">
                                <img alt="Weight" src="/Sprites/Icons/Weight.svg" height={"20px"}/> <p>{pokemon.weight} kg </p>
                            </div>
                            <p className="titleAboutStats">Weight</p>
                        </div>
                        
                        <div className="hrLeftSide">
                            <hr className="hrAbout"/>
                        </div>

                        <div className="heightAbout">
                            <div className="infoAboutStat">
                                <img alt="Height" src="/Sprites/Icons/Height.svg" height={"20px"}/> <p>{pokemon.height} m </p>
                            </div>
                            <p className="titleAboutStats">Height</p>
                        </div>

                        <div className="hrRightSide">
                            <hr className="hrAbout"/>
                        </div>

                        <div className="movesAbout">{capitalizeFirstLetter(pokemon.moves[0])}<br/>{capitalizeFirstLetter(pokemon.moves[1])}<br/><p className="titleAboutStats">Moves</p></div>
                        <div className="descriptionAbout">{pokemon.description}</div>
                    </div>
                    
                    <div className="baseStats">
                        <p className={"baseStatslbl"} style={{color:colorPrincipal}}>Base Stats</p>
                        <div className={"divLabelStat"} style={{color:colorPrincipal}}>
                            <p className="labelStat">HP</p><p className="labelStat">ATK</p><p className="labelStat">DEF</p><p className="labelStat">SATK</p><p className="labelStat">SDEF</p><p className="labelStat">SPD</p>
                        </div>
                        <div className="hrMid">
                            <hr/>
                        </div>
                        <div className={"divLabelStatPokemon"}>
                            <p className="labelStat">{pokemon.base.HP}</p><p className="labelStat">{pokemon.base.Attack}</p><p className="labelStat">{pokemon.base.Defense}</p><p className="labelStat">{pokemon.base.Spa}</p><p className="labelStat">{pokemon.base.Spd}</p><p className="labelStat">{pokemon.base.Speed}</p>
                        </div>
                        <div className="divProgressBar">
                        <p className="labelStat"><ProgressBar completed={pokemon.base.HP}maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.base.Attack} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.base.Defense} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.base.Spa} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.base.Spd} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        <p className="labelStat"><ProgressBar completed={pokemon.base.Speed} maxCompleted={200} height="10px" bgColor={colorPrincipal} labelClassName="barLabel"/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
         </>
    )
}
function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


export default Pokemon