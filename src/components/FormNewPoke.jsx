import React from "react";
import { Link } from "react-router-dom";

const FormNewPoke = ({ props }) => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 shadow p-3 mb-5">
            <div class="card border-primary">
              <div class="card-header bg-primary text-white">Registrarse</div>
              <div class="card-body text-primary">
                <form action="/newPoke" method="POST">
                  {" "}
                </form>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Nombre Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    class="form-control"
                    aria-describedby="emailHelp"
                  >
                    {" "}
                  </input>
                </div>
                <div class="mb-3">
                  <label for="user" class="form-label">
                    Cuenta de Usuario
                  </label>
                  <input
                    type="text"
                    name="user"
                    id="user"
                    class="form-control"
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="pass" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    class="form-control"
                  >
                    {" "}
                  </input>
                </div>
              </div>
              <div class="card-footer bg-transparent border-primary">
                <a href="/" type="button" class="btn btn-secondary">
                  Cancelar
                </a>
                <button type="submit" class="btn btn-primary">
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormNewPoke;
