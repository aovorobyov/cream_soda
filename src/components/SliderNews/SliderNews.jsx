import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import './SliderNews.css'
import { newsList } from "../../data"

export default function SliderNews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  };

  return (
    <div className='slider' style={{ width: '80%', margin: '0 auto' }}>
      <Slider {...settings}>
        {newsList.map(news => (
          <div key={news.id}>
            <img className="photoNews" src={news.image} alt={news.title} />
            <div className="textNews">
                <h3 className='nameNews'>{news.title}</h3>
                <p className='descNews'>{news.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}