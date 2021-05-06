import React from 'react';
import '../../App.css';

function Products() {
    return (
        <div className="products">
            <img src={process.env.PUBLIC_URL + "/images/img-8.jpg"} alt="Travel" />
            <h1>PRODUCTS</h1>
        </div>
    )
}

export default Products;