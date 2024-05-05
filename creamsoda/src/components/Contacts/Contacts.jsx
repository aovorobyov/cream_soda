import './Contacts.css'
// import YandexMap from '../YandexMap/YandexMap'
// const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify');
// const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
// const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = reactify.module(ymaps3);



export default function Contacts() {
    return (
        <div className='contacts' id="contactSection">
            <h1 className='contactsTitle'>Связаться с нами</h1>
            <div className="contactsItems">
                <div className="contactsCafes">
                    <div className="contactsCafe">
                        <h2 className="cafeName">Мясницкая</h2>
                        <a href="tel: + 79153854828" className="cafeTel">+7 (915) 385 48 28</a>
                        <p className="cafeDesc">ул. Мясницкая, 15<br/>Пн - Пт: 8:00 - 23:00<br/>Сб - Вс: 9:00 - 23:00</p>
                        <a href="https://yandex.ru/profile/116589370357"><button className="cafeButton">Оставить отзыв</button></a>
                    </div>
                    <div className="contactsCafe">
                    <h2 className="cafeName">Белая площадь</h2>
                        <a href="tel: + 79162260110" className="cafeTel">+7 (916) 226 01 10</a>
                        <p className="cafeDesc">ул. Лесная, 5<br/>Пн - Пт: 8:00 - 23:00<br/>Сб - Вс: 9:00 - 23:00</p>
                        <a href="https://yandex.ru/profile/27933416475"><button className="cafeButton">Оставить отзыв</button></a>
                    </div>

                </div>
                <div className="mapContainer">
                    <iframe className='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A8e4d1490c9cb1d9f2f80e34cb1ab1274d97649b085ac86094c6d68dd9f67cfeb&amp;source=constructor" width="350" height="350"></iframe>
                </div>
            </div>
        </div>
    )
}
