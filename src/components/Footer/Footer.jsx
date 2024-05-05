import './Footer.css'

export default function() {
    return (
        <footer className='footer'>
            <div className="footerContacts">
                &#169; 2024
            </div>
            <div className="footerNavigation">
                <a href="https://t.me/CREAM_SODA_CAFE" className="footerNavItem">Бронирование на Лесной</a>
                <a href="https://eda.yandex.ru/r/cream_soda?placeSlug=cream_soda_ufitd&shippingType=delivery" className="footerNavItem">Доставка</a>
                {/* <a href="#">Стать частью команды</a> */}
                <a href="https://register.osmicards.com/fc849abf9447?referal=3800002" className="footerNavItem">Бонусная программа</a>
                <a href="#contactSection" className="footerNavItem">Контакты и отзывы</a>
            </div>
        </footer>
    )
}