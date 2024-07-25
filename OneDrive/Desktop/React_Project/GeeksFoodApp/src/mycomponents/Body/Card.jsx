import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ Message, image, name, designation }) => {


    return (
        <div className="card">
            <div className="card-text-box">
                <p className="card-text">{Message}</p>
            </div>
            <div className="card-author">
                <img src={image} alt={name} className="card-image" />
                <div className="card-author-info">
                    <h3 className="card-name">{name}</h3>
                    <p className="card-designation">{designation}</p>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    Message: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired
};

export default Card;