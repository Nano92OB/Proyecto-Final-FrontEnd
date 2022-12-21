import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./cssModules/FormNewPoke.module.css";
import { useRef } from "react";

const FormNewPoke = (props) => {
  const inputName = useRef("");
  const inputImg = useRef("");
  const inputWeight = useRef("");
  const inputHeight = useRef("");
  const inputMove1 = useRef("");
  const inputMove2 = useRef("");
  const inputDescription = useRef("");
  const inputType1 = useRef("");
  const inputType2 = useRef("");
  const inputHp = useRef("");
  const inputAtk = useRef("");
  const inputDef = useRef("");
  const inputSatk = useRef("");
  const inputSdef = useRef("");
  const inputSpd = useRef("");
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault()
    const url = "http://localhost:8080/pf/addNew";
    const newPokemon = {
      name: inputName.current.value,
      img: inputImg.current.value,
      weight: parseInt(inputWeight.current.value),
      height: parseInt(inputHeight.current.value),
      moves: [inputMove1.current.value, inputMove2.current.value],
      description: inputDescription.current.value,
      type: [inputType1.current.value, inputType2.current.value],
      creatorId: null,
      base: {
        HP: parseInt(inputHp.current.value),
        Attack: parseInt(inputAtk.current.value),
        Defense: parseInt(inputDef.current.value),
        Spa: parseInt(inputSatk.current.value),
        Spd: parseInt(inputSdef.current.value),
        Speed: parseInt(inputSpd.current.value),
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    if (newPokemon.weight < 0 || newPokemon.height < 0) {
      alert("Weight and Height must be positive values!");
    } else if (
      newPokemon.base.HP < 0 ||  newPokemon.base.HP > 255 ||
      newPokemon.base.Attack < 0 || newPokemon.base.Attack > 255 ||
      newPokemon.base.Defense < 0 || newPokemon.base.Defense > 255 ||
      newPokemon.base.Spa < 0 || newPokemon.base.Spa > 255 ||
      newPokemon.base.Spd < 0 || newPokemon.base.Spd >255 ||
      newPokemon.base.Speed < 0 || newPokemon.base.Speed > 255
    ) {
      alert("Base scores must be positive values and less than 255!");
    } else {
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authentication: localStorage.getItem("userToken"),
        },
        body: JSON.stringify(newPokemon),
      }).then((data) => {
        if (data.status === 200) {
          alert("Pokemon added successfully!");
          props.setReload(new Date().getTime())
          navigate("/");
        } else {
          alert("An error has occurred");
        }
      });
    }
  };

  return (
    <div className={styles.container + " bg-dark"}>
      <div className={styles.pokeNavbar + " d-flex flex-row g-2"}>
        <Link to={"/"}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="30"
              fill="#FFFFFF"
              viewBox="0 0 10 16"
            >
              <path
                fill="#FFFFFF"
                d="m9.017 11.108-.252-.252a.429.429 0 0 0-.606 0l-2.98 2.997V.43A.429.429 0 0 0 4.75 0h-.357a.429.429 0 0 0-.429.429v13.424l-2.98-2.997a.429.429 0 0 0-.606 0l-.252.252a.429.429 0 0 0 0 .606l4.142 4.16a.429.429 0 0 0 .607 0l4.142-4.16a.429.429 0 0 0 0-.606Z"
              />
            </svg>
          </div>
        </Link>
        <p className="text-light">Add a new Pokemon</p>
      </div>
      <div className={styles.pokeNewCard}>
        <div className={styles.whiteCard + " card text-dark"}>
          <form onSubmit={handleClick}>
            <div className="mb-2">
              <label for="name" className="form-label">
                PokeName
              </label>
              <input
                ref={inputName}
                placeholder="Enter a name"
                maxLength="15"
                id="name"
                name="name"
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                required
              />{" "}
            </div>
            <div className="mb-2">
              <label for="name" className="form-label">
                Image
              </label>
              <input
                ref={inputImg}
                placeholder="Enter a image URL"
                id="name"
                name="name"
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                required
              />{" "}
            </div>
            <div className="mb-2">
              <label for="weight" className="form-label">
                Weight (kg)
              </label>
              <input
                ref={inputWeight}
                type="number"
                name="weight"
                id="weight"
                className="form-control"
                placeholder="0,0kg"
                required
              />
            </div>
            <div className="mb-2">
              <label for="height" className="form-label">
                Height (Mts)
              </label>
              <input
                ref={inputHeight}
                type="number"
                name="height"
                id="height"
                className="form-control"
                placeholder="0,0mts"
                required
              />
            </div>
            <div className="mb-2 d-flex flex-column">
              <label for="description" className="form-label">
                Description
              </label>
              <textarea
                ref={inputDescription}
                placeholder="Enter a description"
                textarea
                id="description"
                name="description"
                rows="6"
                cols="39"
                required
              />{" "}
            </div>          
            <div className="move mb-2">
              <label for="moves" className="form-label">
                Move 1
              </label>
              <input
                ref={inputMove1}
                placeholder="Enter first Move"
                maxLength="20"
                id="move1"
                name="move1"
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                required
              />{" "}
            </div>
            
            <div className="move mb-2">
            <label for="moves" className="form-label">
              Move 2
            </label>
            <input
              ref={inputMove2}
              placeholder="Enter second Move"
              maxLength="20"
              id="move2"
              name="move2"
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              required
            />{" "}
            </div>

            <div className="typeCol d-flex justify-content-between mb-3 mt-3">
              <div className="mb-2 col-5">
                <label for="type" className="form-label">
                  Primary Type
                </label>
                <select
                  ref={inputType1}
                  class="form-select"
                  aria-label="Primary Type"
                  required
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
                  ref={inputType2}
                  class="form-select"
                  aria-label="Secondary Type"
                  required
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
            <div className={"mb-2 " + styles.baseSliders}>
              <div className={styles.baseScores}>
                <p>HP</p>
                <p>ATK</p>
                <p>DEF</p>
                <p>SATK</p>
                <p>SDEF</p>
                <p>SPD</p>
              </div>
              <div className={styles.rangeSliders}>
                <input
                  ref={inputHp}
                  type="number"
                  name="HP"
                  id="HP"
                  className="form-control"
                  required
                />

                <input
                  ref={inputAtk}
                  type="number"
                  name="ATK"
                  id="ATK"
                  className="form-control"
                  required
                />

                <input
                  ref={inputDef}
                  type="number"
                  name="DEF"
                  id="DEF"
                  className="form-control"
                  required
                />

                <input
                  ref={inputSatk}
                  type="number"
                  name="SATK"
                  id="SATK"
                  className="form-control"
                  required
                />
                <input
                  ref={inputSdef}
                  type="number"
                  name="SDEF"
                  id="SDEF"
                  className="form-control"
                  required
                />
                <input
                  ref={inputSpd}
                  type="number"
                  name="SPD"
                  id="SPD"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="card-footer bg-transparent border-dark">
              <button
                type="submit"
                className="btn btn-dark">
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
