import React, { useState } from "react";
import companyLogo from '../../images/logo.png';
import './Navigation.css'
import Modal from '../Modal/Modal'
import Team from "../Team/Team";

export default function Navigation() {

    const [isActive, setIsActive] = useState(false);

    const toggleClasses = () => {
        setIsActive(!isActive);
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };



    return (
        <header className="header">
            <a href="##" className="nav-item"><img className="nav-logo" src={companyLogo} alt="CS logo"/></a>
            <nav className={`nav ${isActive ? 'open' : ''}`}>
                <a href="https://t.me/CREAM_SODA_CAFE" className="nav-item text-item" >Бронирование на Лесной</a>
                <a href="https://eda.yandex.ru/r/cream_soda?placeSlug=cream_soda_ufitd&shippingType=delivery" className="nav-item text-item">Доставка</a>
                <a onClick={handleOpen} className="nav-item text-item">Команда</a>
                <Modal isOpen={isModalOpen} onClose={handleClose}>
                    <Team />
                </Modal>
                <a href="https://register.osmicards.com/fc849abf9447?referal=3800002" className="nav-item text-item">Бонусы</a>
                <a href="#contactSection" className="nav-item text-item">Контакты</a>
            </nav>

            <div className={`burger ${isActive ? 'active' : ''}`} onClick={toggleClasses} >
                <span></span>
            </div>
        </header>
    )
  }