import React from 'react';
import './accountEdit.css';
import TableData from '../Table-Data/tableData';
import { useState } from 'react';

const AccountEdit = (props) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <section className="accountE">
                <div className="accountE-content-wrapper">
                    <h3 className="accountE-title">{props.title}</h3>
                    <p className="accountE-amount">{props.amount}</p>
                    <p className="accountE-amount-description">{props.description}</p>
                </div>
                <div  className="accountE-content-wrapper cta chevron">
                    <span className='openAccount' onClick={() => setIsActive(!isActive)} > 
                        {isActive ? <i className="fa-solid fa-xmark fa-4x"></i> : <i className="fa-solid fa-chevron-right fa-4x"></i> }
                    </span>
                </div>
            </section>
            { isActive && 
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>description</th>
                            <th>Amount</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <TableData />
                    <TableData />
                    <TableData />
                    <TableData />
                </table>
            }
        </>
    )
}

export default AccountEdit