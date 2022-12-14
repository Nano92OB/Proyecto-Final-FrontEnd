import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './cssModules/FormNewPoke.module.css'
import { Slider } from "@mui/material";

const FormNewPoke = ({ props }) => {
  // url = "http://localhost:8080/pokedex"
  //   async function addPokemon(pok){
  //     await fetch(url)
  //     .then()
  //   }

  return (
    <div className={styles.container + ' bg-dark'}>
      <div className={styles.pokeNavbar +' d-flex flex-row g-2'}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="30" fill="#FFFFFF" viewBox="0 0 10 16">
            <path fill="#FFFFFF" d="m9.017 11.108-.252-.252a.429.429 0 0 0-.606 0l-2.98 2.997V.43A.429.429 0 0 0 4.75 0h-.357a.429.429 0 0 0-.429.429v13.424l-2.98-2.997a.429.429 0 0 0-.606 0l-.252.252a.429.429 0 0 0 0 .606l4.142 4.16a.429.429 0 0 0 .607 0l4.142-4.16a.429.429 0 0 0 0-.606Z" />
          </svg>
        </div>
        <p className="text-light">Add the new Pokemon</p>
      </div>
      <div className={styles.pokeNewCard}>
        <div className={styles.whiteCard +' card text-dark'}>
              <form action="/addNew" method="POST">
                  <div className="mb-2">
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
                  <div className="mb-2">
                    <label for="name" className="form-label">
                      Image
                    </label>
                    <input
                      placeholder="Enter a image URL"
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                    />{" "}
                  </div>
                  <div className="mb-2">
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
                <div className="mb-2">
                  <label for="height" className="form-label">
                    Height (Mts)
                  </label>
                  <input
                    type="number"
                    name="height"
                    id="height"
                    className="form-control"
                    placeholder="0,0mts"
                  />
                </div>  
                <div className="mb-2 d-flex flex-column">
                  <label for="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    placeholder="Enter a description"
                    textarea
                    id="description"
                    name="description"
                    rows="6"
                    cols="39"
                  />{" "}
                </div>
                <div className="typeCol d-flex justify-content-between mb-2">
                  <div className="mb-2 col-5">
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
                  <div className="mb-2 col-5">
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
                <div className={'mb-2 '+ styles.baseSliders}>
                  <div className={styles.baseScores}>
                    <p>HP</p>
                    <p>ATK</p>
                    <p>DEF</p>
                    <p>SATK</p>
                    <p>SDEF</p>
                    <p>SPD</p>
                  </div>
                  <div className={styles.rangeSliders}>
                      <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        min={1}
                        max={255}
                      />
                      <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        min={1}
                        max={255}
                      />
                      <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        min={1}
                        max={255}
                      />
                      <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        min={1}
                        max={255}
                      />
                      <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        min={1}
                        max={255}
                      />
                      <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        min={1}
                        max={255}
                      />
                  </div>
                </div>
                <div className="card-footer bg-transparent border-dark">
                  <button type="submit" className="btn btn-dark">
                    Add
                  </button>
                </div>
              </form>  
            </div>
      </div>
    </div>
  );
};

export default FormNewPoke;
