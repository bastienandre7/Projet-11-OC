import React from 'react';
import './header.css';
import Logo from '../../assets/header/argentBankLogo.png';
import {NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from "../../userSlice";

const Header = () => {
    const navigate = useNavigate();

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    {user ?  
                        <a onClick={logOut} className="main-nav-item cursor">
                        <i className="fa fa-user-circle paddingRight"></i>
                            Log Out
                        </a>
                    : 
                        <NavLink to="/signIn" className="main-nav-item">
                        <i className="fa fa-user-circle paddingRight"></i>
                            Sign In 
                        </NavLink>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header