import React from "react";

const NewDefaultPokemon = () => {
  return (
    <div
      className="pokemonContainerBank borderPokemon"
      style={{ borderColor: "#74CB48" }}
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
      <div className="footerPokemon" style={{ backgroundColor: "#74CB48" }}>
        Add Default Pokemons
      </div>
    </div>
  );
};

export default NewDefaultPokemon;
