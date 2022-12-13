import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const FormNewPoke = ({ props }) => {
  // url = "http://localhost:8080/pokedex"
  //   async function addPokemon(pok){
  //     await fetch(url)
  //     .then()
  //   }

  return (
    <div className="container bg-dark">
      <div className="pokeNavbar">
        <p className="text-light">Add the new Pokemon</p>
      </div>
      <div classNameName="pokeNewCard">
        <div className="col-lg-12 shadow p-3 mb-5">
          <div className="card border-dark">
            <div className="card-body text-dark">
              <form action="/addNew" method="POST">
                {" "}
              </form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  PokeName
                </label>
                <input
                  placeholder="Enter a name"
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                />{" "}
              </div>
              <div className="mb-3">
                <label for="weight" className="form-label">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  className="form-control"
                  placeholder="0,0kg"
                />
              </div>
              <div className="mb-3">
                <label for="height" className="form-label">
                  Height (Mts)
                </label>
                <input
                  type="number"
                  name="height"
                  id="height"
                  className="form-control"
                  placeholder="0,0 mts"
                />{" "}
                <div className="mb-3">
                  <label for="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    placeholder="Enter a description"
                    textarea
                    id="description"
                    name="description"
                    rows="1"
                    cols="39"
                  />{" "}
                </div>
                <div className="typeCol d-flex justify-content-around">
                  <div className="mb-3 col-5">
                    <label for="type" className="form-label">
                      Primary Type
                    </label>
                    <select
                      class="form-select"
                      multiple
                      aria-label="Primary Type"
                    >
                      <option value="Electric">Electric</option>
                      <option value="Grass">Grass</option>
                      <option value="Poison">Poison</option>
                      <option value="Water">Water</option>
                      <option value="Fire">Fire</option>
                      <option value="Bug">Bug</option>
                      <option value="Flying">Flying</option>
                      <option value="Steel">Steel</option>
                      <option value="Rock">Rock</option>
                      <option value="Normal">Normal</option>
                      <option value="Ghost">Ghost</option>
                      <option value="Fighting">Fighting</option>
                      <option value="Psychic">Psychic</option>
                      <option value="Ice">Ice</option>
                      <option value="Dark">Dark</option>
                      <option value="Fairy">Fairy</option>
                      <option value="Ground">Ground</option>
                      <option value="Dragon">Dragon</option>
                    </select>{" "}
                  </div>
                  <div className="mb-3 col-5">
                    <label for="type" className="form-label">
                      Secondary Type
                    </label>
                    <select
                      class="form-select"
                      multiple
                      aria-label="Primary Type"
                    >
                      <option value="Electric">Electric</option>
                      <option value="Grass">Grass</option>
                      <option value="Poison">Poison</option>
                      <option value="Water">Water</option>
                      <option value="Fire">Fire</option>
                      <option value="Bug">Bug</option>
                      <option value="Flying">Flying</option>
                      <option value="Steel">Steel</option>
                      <option value="Rock">Rock</option>
                      <option value="Normal">Normal</option>
                      <option value="Ghost">Ghost</option>
                      <option value="Fighting">Fighting</option>
                      <option value="Psychic">Psychic</option>
                      <option value="Ice">Ice</option>
                      <option value="Dark">Dark</option>
                      <option value="Fairy">Fairy</option>
                      <option value="Ground">Ground</option>
                      <option value="Dragon">Dragon</option>
                    </select>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-transparent border-dark">
              <button type="submit" className="btn btn-dark">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNewPoke;
