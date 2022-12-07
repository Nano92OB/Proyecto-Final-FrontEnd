import React from "react";
import styles from './Loginform.module.css'

const LoginForm = () => {
    return(
        <div id={styles.formDiv}>
                <main className="form-signin text-center shadow-lg p-3 mb-5">
                    <form id="formLogin" action="/login" method="POST">
                            <div className="title margins">
                                <div className="logo">
                                    <img className="imageLogo" src="/Sprites/Icons/Pokeball.png" alt="pokeball" />

                                    <span className="textTitle margins">
                                        Pokédex
                                    </span> </div>
                            </div>
                            <h1 className="h3 mb-3 fw-normal">Ingrese Porfavor</h1>

                            <div className="form-floating">
                                <input type="text" className="form-control" id="user" name="user" placeholder="User"/>
                                    <label for="user">User</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="pass" name="pass" placeholder="Password"/>
                                    <label for="pass">Password</label>
                            </div>

                            <div className="checkbox mb-3">

                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                    </form>
                    <br/>
                        <a href="/register" type="button" className="w-100 btn btn-lg btn-bd-primary">Registrarse</a>
                        <p className="mt-5 mb-3 text-muted">&copy; Nano Odella</p>
                </main>
        </div>       
    )
}

export default LoginForm;