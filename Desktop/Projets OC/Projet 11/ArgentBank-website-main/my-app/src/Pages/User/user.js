import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css';
import Header from '../../Components/Header/header';
import Account from '../../Components/Account/account';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectName, getInfo } from "../../userSlice";

const User = () => {

    const user = useSelector(selectUser);
    const userName = useSelector(selectName);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const Edit = () => {
        navigate('/user/edit')
    }

    useEffect(() => {
            fetch('http://localhost:3001/api/v1/user/profile', {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : "Bearer" + user
            }   
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 200 ){
                        dispatch(getInfo(data.body))
                    } else {
                        navigate('/')
                    }
                })
                
    })


    if  (user !== null ){
    return (
        <>
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{userName} !</h1>
                    <button onClick={Edit} className="edit-button">Edit User Info</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Available Balance"} />
                <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"} description={"Available Balance"} />
                <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"} description={"Current Balance"} />
            </main>
        </>
    )
    }   
}

export default User