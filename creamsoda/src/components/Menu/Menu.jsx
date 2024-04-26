import './Menu.css'
import MenuButton from "../MenuButton/MenuButton"
import { useState } from "react"
import { coffee, breakfasts, salads, soups, sandwiches, hotDishes, desserts, drinks, hotDrinks, addition, drips } from "../../data"
import Card from '../Card/Card'

const items = {
  coffee,
  breakfasts, 
  salads, 
  soups, 
  sandwiches, 
  hotDishes, 
  desserts, 
  drinks, 
  hotDrinks, 
  addition, 
  drips
};

export default function() {

    const [contentType, setContentType] = useState('coffee')
    function HandleClick(type) {
        setContentType(type)
    }

    return (
        <section className='menu'>
            <span className="menu-nav">
                <MenuButton isActive={contentType === 'coffee'} onClick={() => HandleClick('coffee')}>Кофе</MenuButton>
                <MenuButton isActive={contentType === 'breakfasts'} onClick={() => HandleClick('breakfasts')}>Завтраки</MenuButton>
                <MenuButton isActive={contentType === 'salads'} onClick={() => HandleClick('salads')}>Салаты</MenuButton>
                <MenuButton isActive={contentType === 'soups'} onClick={() => HandleClick('soups')}>Супы</MenuButton>
                <MenuButton isActive={contentType === 'sandwiches'} onClick={() => HandleClick('sandwiches')}>Сэндвичи</MenuButton>
                <MenuButton isActive={contentType === 'hotDishes'} onClick={() => HandleClick('hotDishes')}>Горячие блюда</MenuButton>
                 <MenuButton isActive={contentType === 'desserts'} onClick={() => HandleClick('desserts')}>Десерты</MenuButton>
                <MenuButton isActive={contentType === 'drinks'} onClick={() => HandleClick('drinks')}>Напитки</MenuButton>
                <MenuButton isActive={contentType === 'hotDrinks'} onClick={() => HandleClick('hotDrinks')}>Горячие напитки</MenuButton>
                <MenuButton isActive={contentType === 'addition'} onClick={() => HandleClick('addition')}>Дополнительно</MenuButton>
                <MenuButton isActive={contentType === 'drips'} onClick={() => HandleClick('drips')}>Дрип-кофе</MenuButton>
            </span>
            
            <div className='menu-items'>
                {items[contentType] && items[contentType].map((item) => (
                    <Card
                        key={item.title} // Убедитесь, что title уникален, либо используйте другой уникальный ключ
                        image={item.image || 'src/images/no_photopng.png'}
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