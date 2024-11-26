// src/components/ReturnsManagement.js
import React from 'react';

const ReturnsManagement = ({ returns }) => {
    return (
        <div>
            <h2>Returns Management</h2>
            <ul>
                {returns.map((returnRequest) => (
                    <li key={returnRequest.id}>
                        {returnRequest.productName} - Status: {returnRequest.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReturnsManagement;