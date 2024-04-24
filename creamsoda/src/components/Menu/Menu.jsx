import './Menu.css'
import MenuButton from "../MenuButton/MenuButton"
import { useState } from "react"
import { coffee } from "../../data"
import Card from '../Card/Card'
import photo from '../../images/coffee.jpeg';

export default function() {

    const [contentType, setContentType] = useState('coffee')
    function HandleClick(type) {
        setContentType(type)
    }

    return (
        <section className='menu'>
            <span className="menu-nav">
                <MenuButton isActive={contentType === 'coffee'} onClick={() => HandleClick('coffee')}>Кофе</MenuButton>
                <MenuButton className="menu-nav-item">Завтраки</MenuButton>
                <MenuButton className="menu-nav-item">Салаты</MenuButton>
                <MenuButton className="menu-nav-item">Супы</MenuButton>
                <MenuButton className="menu-nav-item">Сэндвичи</MenuButton>
                <MenuButton className="menu-nav-item">Горячие блюда</MenuButton>
                <MenuButton className="menu-nav-item">Десерты</MenuButton>
                <MenuButton className="menu-nav-item">Напитки</MenuButton>
                <MenuButton className="menu-nav-item">Горячие напитки</MenuButton>
                <MenuButton className="menu-nav-item">Дополнительно</MenuButton>
                <MenuButton className="menu-nav-item">Дрип-кофе</MenuButton>
            </span>
            
            <div className='menu-items'>
                {contentType === 'coffee' && coffee.map((item) => (
                    <Card
                        key={item.title} // Убедитесь, что title уникален, либо используйте другой уникальный ключ
                        image={item.image || 'src/images/no_photopng.png'}  // Предоставьте путь к изображению по умолчанию, если оно отсутствует
                        name={item.title}
                        volume={item.volume}
                        price={item.price}
                    />
                    ))}

                {/* <Card image={photo} price='360' volume='200 мл' name='Американо маленький' />
                <Card image={photo} price='450' volume='300 мл' name='Американо средний' />
                <Card image={photo} price='540' volume='400 мл' name='Американо большой' />
                <Card image={photo} price='600' volume='500 мл' name='Американо Макс' /> */}
                {/* <Card image={photo} price='360' volume='200 мл' name='Американо маленький' />
                <Card image={photo} price='450' volume='300 мл' name='Американо средний' />
                <Card image={photo} price='540' volume='400 мл' name='Американо большой' />
                <Card image={photo} price='600' volume='500 мл' name='Американо Макс' /> */}
            </div>
        </section>
    )
}