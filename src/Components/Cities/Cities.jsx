import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Cities.scss';
import { NavLink } from 'react-router-dom';


import DollieBlair from '../../Assets/Images/DollieBlair.png';

function Cities() {
   const [videos, setVideos] = React.useState([]);

   const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
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
            setVideos(data.splice(0, 15));
         });
   }, []);



   return (
      <>
         <section className='cities'>
            <div className='container'>
               <div className="cities__dollie">
                  <NavLink className='city__user' to='/channel'>
                     <img
                        src={DollieBlair}
                        alt='Dollie Blair img'
                        width='50'
                        height='50'
                     />

                     <strong className='user_name'>
                        Dollie Blair
                     </strong>
                  </NavLink>
               </div>
            </div>

            <ul>
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
                                 alt='City img'
                                 width='250'
                                 height='150'
                              />

                              <h4 className='slider__item-title'>
                                 {video.title
                                    .split(' ')
                                    .slice(0, 2)
                                    .join(' ')}
                              </h4>

                              <div className='slider__item-views'>
                                    <span className='slider__item-text'>
                                    80k views  ·  3 days ago
                                    </span>
                                 <span className='slider__item-name'>
                                    Dollie Blair
                                 </span>
                              </div>
                           </NavLink>
                        </li>
                     ))}
               </Slider>
            </ul>
         </section>
      </>
   );
}

export default Cities;