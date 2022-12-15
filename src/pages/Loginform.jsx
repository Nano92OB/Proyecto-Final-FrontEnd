import React from "react";
import styles from "./cssModules/Loginform.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const loginURL = "http://localhost:8080/auth/login";
  let navigate = useNavigate();
  const inputUsername = useRef("");
  const inputPassword = useRef("");

  const loginFetch = async (username, password) => {
    let user = {
      username: username,
      password: password,
    };
    console.log(user);
    const response = await fetch(loginURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 200) {
      alert("Data entered is not valid");
    }
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("userToken", data.token);
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className={styles.formDiv}>
      <main className="form-signin text-center shadow-lg p-3 mb-5">
        <form id="formLogin" action="/login" method="POST">
          <div className="title margins align-items-center">
            
              <div className={styles.pokeArrow}>
              <Link to={'/'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="30"
                  fill="#000000"
                  viewBox="0 0 10 16"
                >
                  <path
                    fill="#000000"
                    d="m9.017 11.108-.252-.252a.429.429 0 0 0-.606 0l-2.98 2.997V.43A.429.429 0 0 0 4.75 0h-.357a.429.429 0 0 0-.429.429v13.424l-2.98-2.997a.429.429 0 0 0-.606 0l-.252.252a.429.429 0 0 0 0 .606l4.142 4.16a.429.429 0 0 0 .607 0l4.142-4.16a.429.429 0 0 0 0-.606Z"
                  />
                </svg>
                </Link>
              </div>
            
          </div>
          <div className={styles.logo}>
            <img
              className="imageLogo"
              src="/Sprites/Icons/Pokeball.png"
              alt="pokeball"
            />
            <span className={styles.textTitle + " margins"}>Pokédex</span>
          </div>
          <div className="form-floating mb-3">
            <input
              ref={inputUsername}
              type="text"
              className="form-control"
              id="user"
              name="user"
              placeholder="User"
            />
            <label for="user">User</label>
          </div>
          <div className="form-floating">
            <input
              ref={inputPassword}
              type="password"
              className="form-control"
              id="pass"
              name="pass"
              placeholder="Password"
            />
            <label for="pass">Password</label>
          </div>

          <div className="checkbox mb-3"></div>
          <button
            className="w-100 btn btn-lg btn btn-dark"
            type="button"
            onClick={() =>
              loginFetch(
                inputUsername.current.value,
                inputPassword.current.value
              )
            }
          >
            Login
          </button>
        </form>
        <br />
      </main>
    </div>
  );
};

export default LoginForm;
