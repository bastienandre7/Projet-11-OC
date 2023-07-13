import React from 'react';
import './headerEdit.css';
import EditLogo from '../../assets/header-edit/logo-edit.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectName } from "../../userSlice";

function HeaderEdit() {

    const userName = useSelector(selectName);

    return (
        <header>
            <nav className='navigation'>
                <NavLink to="/" className='logoEdit'>
                    <img src={EditLogo} ></img>
                </NavLink>
                <div className='infoNav'>
                    <div className='infoUser'>
                        <p className='userNameP'>{userName}</p>
                        <div className='bustBackground'>
                            <i className="fa-regular fa-user fa-2x bust"></i>
                        </div>
                    </div>
                    <i className="fa-solid fa-gear fa-3x gear"></i>
                    <i className="fa-solid fa-power-off fa-3x power"></i>
                </div>
            </nav>
        </header>
    )
}

export default HeaderEdit