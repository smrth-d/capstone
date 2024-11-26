import React from 'react';
import Navbar from './components/Navbar';
import ImageUpload from './components/ImageUpload';
import ProductListing from './components/ProductListing';
import Tracking from './components/Tracking';
import Login from './components/Login';
import PurchaseHistory from './components/PurchaseHistory';
import ReturnsManagement from './components/ReturnsManagement';
const App = () => {
    const purchases = [
        { id: 1, productName: 'Product 1' },
        { id: 2, productName: 'Product 2' },
    ];

    const returns = [
        { id: 1, productName: 'Product 1', status: 'Pending' },
        { id: 2, productName: 'Product 2', status: 'Completed' },
    ];

    return (
        <div>
            <Navbar />
            <ImageUpload />
            <ProductListing />
            <Tracking />
            <Login />
            <PurchaseHistory purchases={purchases} />
            <ReturnsManagement returns={returns} />
        </div>
    );
};

export default App;