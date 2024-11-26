// src/components/PurchaseHistory.js
import React from 'react';

const PurchaseHistory = ({ purchases }) => {
    const handleReturn = (id) => {
        // Logic to handle return
        alert(`Returning product with ID: ${id}`);
    };

    return (
        <div>
            <h2>Your Purchase History</h2>
            <ul>
                {purchases.map((purchase) => (
                    <li key={purchase.id}>
                        {purchase.productName} - 
                        <button onClick={() => handleReturn(purchase.id)}>Return</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PurchaseHistory;