import React from 'react';
import './edit.css';
import HeaderEdit from '../../Components/Header-Edit/headerEdit';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { selectUser, selectFirstName, selectLastName, selectName, getInfo } from "../../userSlice";
import AccountEdit from "../../Components/Account-Edit/accountEdit";

function Edit() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(selectUser);
    const userName = useSelector(selectName);
    const lastName = useSelector(selectLastName);
    const firstName = useSelector(selectFirstName);

    const [userNameState, setUserName] = useState("");

    

    const editUsername = () => {
        fetch('http://localhost:3001/api/v1/user/profile', {
            method: "PUT",
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : "Bearer" + user
            },
            body: JSON.stringify({
                "userName": userNameState
                }) 
            })
                .then(navigate('/user'))
            };

    const Cancel = () => {
        navigate('/user')
    };

    if  (user !== null ){
        return (
            <>
                <HeaderEdit />
                <main>
                    <div>
                        <h1 className='title-edit'>Edit user info</h1>
                        <form className='formEdit'>
                            <div className='display-form'>
                                <label htmlFor="Username">User name: </label>
                                <input className='input-edit' type="text" id="username" defaultValue={userName} onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className='display-form'>
                                <label htmlFor="Firstname">Fist name: </label>
                                <input className='input-edit grey-input' type="text" id="firstname" defaultValue={firstName} disabled="disabled" />
                            </div>
                            <div className='display-form'>
                                <label htmlFor="Lastname">Last name: </label>
                                <input className='input-edit grey-input' type="text" id="username" defaultValue={lastName} disabled="disabled" />
                            </div>
                        </form>
                        <div className='buttonSaveCancel'>
                            <button onClick={editUsername} className='boutonEdit'>Save</button>
                            <button onClick={Cancel} className='boutonEdit'>Cancel</button>
                        </div>
                        <AccountEdit title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} description={"Available Balance"} />
                        <AccountEdit title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"} description={"Available Balance"} />
                        <AccountEdit title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"} description={"Current Balance"} />
                    </div>
                </main>
            </>
        )
    }
}

export default Edit