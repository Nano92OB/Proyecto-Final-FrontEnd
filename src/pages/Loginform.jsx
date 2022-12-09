import React from "react";
import styles from './Loginform.module.css'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const loginURL = 'http://localhost:8080/auth/login'
    let navigate = useNavigate();
    const inputUsername = useRef('')
    const inputPassword = useRef('')
    
    const loginFetch = async (username, password) => {
        let user = {
            username: username,
            password: password
        }
        console.log(user)
        const response = await fetch(loginURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (response.status !== 200) {
            alert('Data entered is not valid')
        }
        const data = await response.json()
        if(data.token){
            localStorage.setItem('userToken', data.token)
            navigate("/")
        }
    }

    return(
        <div className={styles.formDiv}>
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
                                <input ref={inputUsername} type="text" className="form-control" id="user" name="user" placeholder="User" />
                                    <label for="user">User</label>
                            </div>
                            <div className="form-floating">
                                <input ref={inputPassword} type="password" className="form-control" id="pass" name="pass" placeholder="Password"/>
                                    <label for="pass">Password</label>
                            </div>

                            <div className="checkbox mb-3">

                            </div>
                            <button className="w-100 btn btn-lg btn btn-dark" type="button" onClick={()=>loginFetch(inputUsername.current.value,inputPassword.current.value)}>Login</button>
                    </form>
                    <br/>
                </main>
        </div>       
    )
}

export default LoginForm;