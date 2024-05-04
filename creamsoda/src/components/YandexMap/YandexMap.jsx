import React, { useEffect } from 'react';
import './YandexMap.css'

const YandexMap = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8e4d1490c9cb1d9f2f80e34cb1ab1274d97649b085ac86094c6d68dd9f67cfeb&width=500&height=500&lang=ru_RU&scroll=true";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            // При размонтировании компонента, очищаем созданный тег скрипта.
            document.body.removeChild(script);
        }
    }, []);

    return <div className='map' id="yandex-map" style={{width: '350px', height: '350px', borderRadius: '50%'}}/>;
}

export default YandexMap;