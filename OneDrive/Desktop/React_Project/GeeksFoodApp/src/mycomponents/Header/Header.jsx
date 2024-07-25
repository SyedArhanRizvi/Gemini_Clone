import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='header'>
            <div className="nav-left">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo image" />
                <span className="logotext">GeekFoods</span>
            </div>
            <div className={`nav-center ${isOpen ? 'open' : ''}`}>
                <ul className='nav-list'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quote">Quote</Link></li>
                    <li><Link to="/Restaurant">Resturents</Link></li>
                    <li><Link to="/foods">Foods</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="nav-right">
                <button id='startbtn'>Get Started</button>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/quote" onClick={toggleMenu}>Quote</Link></li>
                        <li><Link to="/Restaurant" onClick={toggleMenu}>Resturents</Link></li>
                        <li><Link to="/foods" onClick={toggleMenu}>Foods</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}