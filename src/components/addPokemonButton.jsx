import React from "react";
import { Link } from "react-router-dom";

const NewPokemonButton = () => {
  return (
    <div className="pokemonContainerBank borderPokemon" style={{borderColor: '#666666'}}>
      <Link to={"/addForm"}>
        <div className="bodyPokemon">
          <div className="divImagePokemon" >
            <img
              alt="a"
              src="/Sprites/Icons/AddPokeball.png"
              className="imgPokemon"
            />
          </div>
        </div>
        <div className="footerPokemon" style={{ backgroundColor: "#666666" }}>
          Add
        </div>
      </Link>
    </div>
  );
};

export default NewPokemonButton;
