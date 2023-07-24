import React, { useState } from 'react';
import './signIn.css';
import Header from '../../Components/Header/header';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../../userSlice";


const SignIn = () => {
    
    const navigate = useNavigate();

    const [emailSubmit, setEmail] = useState("");
    const [passwordSubmit, setPassword] = useState("");

    const dispatch = useDispatch();

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const logIn = await fetch('http://localhost:3001/api/v1/user/login', {
        method: "POST",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "email": emailSubmit,
            "password": passwordSubmit
            })     
        });

        const response = await logIn.json();


        if(response.status === 200){
            dispatch(login({
                token: response.body.token,
            }));
            navigate('/user');
        }

        if(response.status === 400){
            const erreur = document.getElementById("error");
            erreur.innerHTML = `Adresse E-mail ou Mot de passe incorrect`;
            erreur.classList.add("classe_erreur");
            setTimeout(() => {   
            },5000)
            return;
        }
    }


    return (
        <>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit} id="form">
                        <div className="input-wrapper">
                            <label htmlFor="email">Email </label>
                            <input type="text" id="username"  onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password </label>
                            <input type="password" id="password"  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me </label>    
                        </div>
                        <button className="sign-in-button" type="submit">Sign In</button>
                    </form>
                </section>
                <div id='error'></div>
            </main>
        </>
    )
}

export default SignIn