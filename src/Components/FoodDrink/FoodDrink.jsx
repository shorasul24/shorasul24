import './FoodDrink.scss';

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink } from 'react-router-dom';
import FoodDrinkLogo from '../../Assets/Images/food_drink.png';

function FoodDrink() {

   const [videos, setVideos] = React.useState([]);

   const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
         console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
         );
      }
   };

   React.useEffect(() => {
      fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
         .then((res) => res.json())
         .then((data) => {
            setVideos(data.splice(30, 45));
         });
   }, []);

   return (
      <section className="food__dirnk">
         <div className="container__food">
            <div className='food-drink__brend'>
               <NavLink className='food-drink__link' to='/channel'>
                  <img
                     className='food-drink__image'
                     src={FoodDrinkLogo}
                     alt='Food Drink logo'
                     width='50'
                     height='50'
                  />

                  <strong className='food-drink__heading'>
                     Food & Drink
                  </strong>
               </NavLink>
               <span className='food-drink__text'>
                  Recommended channel for you
               </span>

               <button className="food__btn">
                  Subscribe 2.3m
               </button>
            </div>

            <ul className="food__drink--list">
               <Slider {...settings}>
                  {videos &&
                     videos.map((video) => (
                        <li
                           className='slider__item'
                           key={video.id}>
                           <NavLink
                              className='slider__item-link'
                              to={`/channel/${video.id}`}>
                              <img
                                 className='slider__item-image'
                                 src={video.thumbnailUrl}
                                 alt='Food and drink img'
                                 width='250'
                                 height='150'
                              />

                              <h4 className='slider__item-title'>
                                 {video.title
                                    .split(' ')
                                    .slice(0, 3)
                                    .join(' ')}
                              </h4>

                              <div className='slider__item-views'>
                                 <span className='slider__item-text'>
                                    13k views · 15 days ago{' '}
                                 </span>

                                 <span className='slider__item-text'>
                                    Food & Drink
                                 </span>
                              </div>
                           </NavLink>
                        </li>
                     ))}
               </Slider>
            </ul>

         </div>
      </section>
   )
}


export default FoodDrink;