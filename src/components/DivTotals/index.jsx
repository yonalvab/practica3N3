import React from 'react'
import './DivTotals.css'

export const DivTotals = ({ tipTotal, totalAmount }) => {
    return (
        <div className="result-txt">
            <div className="text-amount">
                <div>
                    <h2>Tip Amount</h2>
                    <p>/ person</p>
                </div>
                <h3>$<span id="tip-amount">{parseInt(tipTotal)}</span></h3>
            </div>
            <div className="total-amount">
                <div>
                    <h2>Total</h2>
                    <p>/ person</p>
                </div>
                <h3>$<span id="total">{totalAmount}</span></h3>
            </div>
        </div>
    );
};


