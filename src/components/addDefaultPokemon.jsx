import React from "react";

const NewDefaultPokemon = () => {
  return (
    <div
      className="pokemonContainerBank borderPokemon"
      style={{ borderColor: "#666666" }}
    >
      <div className="bodyPokemon">
        <div className="divImagePokemon">
          <img
            alt="a"
            src="Sprites\Icons\birthdaypokemon.png"
            className="imgPokemon"
          />
        </div>
      </div>
      <div className="footerPokemon" style={{ backgroundColor: "#666666" }}>
        Add Default Pokemons
      </div>
    </div>
  );
};

export default NewDefaultPokemon;
