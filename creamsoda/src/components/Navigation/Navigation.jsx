import React, { useState } from "react";
import companyLogo from '../../images/logo.png';
import './Navigation.css'

export default function Navigation() {

    const [isActive, setIsActive] = useState(false);

    const toggleClasses = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="header">
            <a href="/" className="nav-item"><img className="nav-logo" src={companyLogo} alt="CS logo"/></a>
            <nav className={`nav ${isActive ? 'open' : ''}`}>
                <a href="#" className="nav-item text-item">Бронирование</a>
                <a href="#" className="nav-item text-item">Доставка</a>
                <a href="#" className="nav-item text-item">Команда</a>
                <a href="#" className="nav-item text-item">Бонусы</a>
                <a href="#" className="nav-item text-item">Отзывы</a>
                <a href="#" className="nav-item text-item">Контакты</a>
            </nav>

            <div className={`burger ${isActive ? 'active' : ''}`} onClick={toggleClasses} >
                <span></span>
            </div>
        </header>
    )
  }