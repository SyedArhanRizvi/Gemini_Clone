import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ length, image, name, designation }) => {
    // Generate lorem ipsum text of specified length
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a bibendum turpis. Nullam et nisl eu mauris venenatis malesuada. Fusce vitae nisi vel eros scelerisque euismod. Sed ut diam a dui consectetur facilisis ut sit amet massa. Vestibulum non justo ut velit tempor aliquam.";
    const truncatedText = loremIpsum.slice(0, length) + '...';

    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-designation">{designation}</p>
                <p className="card-text">{truncatedText}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    length: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired
};

export default Card;