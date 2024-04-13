import React from 'react'
import './ListaLi.css'

export const ListaLi = ({ tip, value }) => {
    return (
        <>
            <li id="percentage-5">
                <button type="button" className={`percentage-button ${tip === value && 'active'}`} value={value}>{value}%</button>
            </li>
        </>
    )
}
