import React from 'react';
import './Card.css';

function Card({ title, description}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description.split("\n").map((line, index) => <React.Fragment key={index}>{index > 0 && <br />}{line}</React.Fragment>)}</p>
        </div>
    );
}

export default Card;
