import React from "react";
import './Card.css'
// import Button from '../Button/Button'

export default function Card({ image, price, volume, name }) {
    return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-info">
        <span className="card-numbers">
            <p className="card-price">{price} ₽</p>
            <p className="card-volume">{volume}</p>
        </span>
        <p className="card-name">{name}</p>
        {/* <Button>Подробнее</Button> */}
      </div>
    </div>
  )
}