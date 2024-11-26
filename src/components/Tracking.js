// src/components/Tracking.js
import React from 'react';

const Tracking = () => {
    return (
        <div>
            <h2>Track Your Order</h2>
            <p>Enter your order ID to track your shipment.</p>
            <input type="text" placeholder="Order ID" />
            <button>Track</button>
        </div>
    );
};

export default Tracking;