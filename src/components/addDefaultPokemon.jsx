import React from "react";
import {useNavigate} from "react-router-dom";


const NewDefaultPokemon = (props) => {
  const navigate = useNavigate()
  const addDefaultPokemons = ()=>{
    const url = 'http://localhost:8080/pokedex/defaultPoks'
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authentication: localStorage.getItem("userToken"),
      },
    }).then((data) => {
      if (data.status == 200) {
        alert("Default Pokemons added successfully!");
        props.setReload(new Date().getTime())
        navigate("/");
      } else {
        alert("An error has occurred");
      }
    })
  }
  return (
    <div onClick={()=>addDefaultPokemons()}>
      <div
        className="pokemonContainerBank borderPokemon"
        style={{borderColor: "#74CB48"}}
      >
        <div className="bodyPokemon">
          <div className="divImagePokemon">
            <img
              alt="a"
              src="Sprites\Icons\defaultpokemons.png"
              className="imgPokemon"
            />
          </div>
        </div>
        <div className="footerPokemon" style={{backgroundColor: "#74CB48"}}>
          Add Default Pokemons
        </div>
      </div>
    </div>

  );
};

export default NewDefaultPokemon;
