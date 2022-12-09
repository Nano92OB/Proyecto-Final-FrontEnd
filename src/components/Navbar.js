import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn";

const Navbar = ({ change, stateChange, search }) => {

  const [isLogged, setLogged] = useState(localStorage.getItem('userToken'))

  return (
    <nav>
      <div className="title margins">
        <div className="logo">
          <img
            className="imageLogo"
            src="/Sprites/Icons/Pokeball.png"
            alt="pokeball"
          />
          <span className="textTitle margins">Pokédex</span>{" "}
        </div>
        <div className="typeOrder" onClick={() => change()}>
          {!stateChange ? (
            <>
              #
              <img
                src="/Sprites/Icons/Arrow.svg"
                alt="arrow"
                className="arrowNav"
              />
            </>
          ) : (
            <>
              A
              <img
                src="/Sprites/Icons/Arrow.svg"
                alt="arrow"
                className="arrowNav"
              />
            </>
          )}
        </div>
        {
          (isLogged!=null) ?
            <button className="w-10 btn btn-sm btn-dark" type="button" onClick={setLogged(null)}>Log Out</button>      
            :
            <LoginBtn handler={setLogged}/>           
        }
       
      </div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="&#xF002; Buscar"
          className="fontAw"
          onChange={(e) => search(e.target.value)}
        />
      </div>
    </nav>
  );
};
export default Navbar;
