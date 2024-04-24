import React from "react";
import companyLogo from '../../images/logo.jpg';
import './Navigation.css'

export default function Navigation() {
    return (
        <>
            <span className="nav">
                <a href="#" className="nav-item">Бронирование</a>
                <a href="#" className="nav-item">Доставка</a>
                <a href="/" className="nav-item"><img className="nav-logo" src={companyLogo} alt="CS logo"/></a>
                <a href="#" className="nav-item">Команда</a>
                <a href="#" className="nav-item">Контакты</a>
            </span>
        </>
    )
}