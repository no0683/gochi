import React from 'react';
import '../../App.css';

function Services() {
    return (
        <div className="services">
            <img src={process.env.PUBLIC_URL + "/images/img-2.jpg"} alt="Travel" />
            <h1>SERVICES</h1>
        </div>
    )
}

export default Services;