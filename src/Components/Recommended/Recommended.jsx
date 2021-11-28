import './Recommended.scss';

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';


function Recommended() {
   const [videos, setVideos] = React.useState([]);

   const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2.5,
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
            setVideos(data.splice(15, 30));
         });
   }, []);

   return (
      <section className='recommended'>

         <h2 className="recommended__heading">
            Recommended
         </h2>

         <ul className="slider__list">
            <Slider {...settings}>
               {videos &&
                  videos.map((video) => (


                     <li
                        className='slider__item'
                        key={video.id}>

                        <NavLink className='slider__item-link'
                           to={`/video/${video.id}`}>
                        <img
                        className='slider__item-image'
                        src={video.url}
                        alt=''
                        width='540'
                        height='250'
                        />

                        <h4 className='slider__item-title'>
                     {video.title
                        .split(' ')
                        .slice(0, 5)
                        .join(' ')}
                        </h4>

                        <div className='slider__item-views'>
                        <span className='slider__item-text'>
                        34k views · 5 months ago{' '}
                        </span>

                        <span className='slider__item-text'>
                        Gussie French
                        </span>
                        </div>
                        </NavLink>
                     </li>
                     
                  ))}
         </Slider>
      </ul>

      </section >
   )
}

export default Recommended;