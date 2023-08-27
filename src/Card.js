import React from 'react';

function Card({ imageSrc, header, description }) {
    return (
        <div className="card">

            <img src={imageSrc} alt={header} className="card-image" />
            <h3 className="card-title">{header}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
}

export default Card;
