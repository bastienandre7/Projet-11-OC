import React from 'react';
import './tableData.css';
import { useState } from 'react';

const TableData = (props) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <thead><tr><td></td><td></td><td></td><td></td><td></td></tr></thead>
            <tbody className='rowData'>
                <tr>
                    <td className='firstTopTD'>27/02/20</td>
                    <td>Golden Sun Bakery</td>
                    <td>$8.00</td>
                    <td>$298.00</td>
                    <td className='lastTopTD'><span onClick={() => setIsActive(!isActive)}><i className="fa-sharp fa-solid fa-chevron-down buttonCollapse"></i></span></td>
                </tr>
                {
                    isActive && 
                    <>
                    <tr><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td><td></td><td></td></tr>
                    <tr>
                        <td>Transaction</td>
                        <td>Electronic</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>
                                <select className='select'>
                                    <option value="0">Food</option>
                                    <option value="1">Accommodation</option>
                                    <option value="2">Health</option>
                                    <option value="3">Travel</option>
                                    <option value="4">Work</option>
                                    <option value="5">Saving</option>
                                    <option value="6">Assurance</option>
                                    <option value="7">Animals</option>
                                </select>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='firstBotTD'>Note</td>
                        <td>Iorem ipsum</td>
                        <td></td>
                        <td></td>
                        <td className='lastBotTD'></td>
                    </tr>
                    </>
                }
            </tbody>
        </>
    )
}

export default TableData