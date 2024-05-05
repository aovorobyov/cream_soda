import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import './SliderInvite.css'

const photosTeam = [
    {
      id: 1,
      image: "src/images/team/team_1.jpg",
    },
    {
        id: 3,
        image: "src/images/team/team_3.jpg",
    },
    {
        id: 4,
        image: "src/images/team/team_4.jpg",
    },
]

export default function SliderInvite() {
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
        <div className='sliderInvite'>
            <Slider {...settings}>
                {photosTeam.map(photos => (
                <div key={photos.id}>
                    <img className="photoNews" src={photos.image} alt={'Фото команды'} />
                </div>
                ))}
            </Slider>
        </div>
    )
}