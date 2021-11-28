import React from 'react';


import "./VideoPlay.scss";
import FoodDrinkImg from "../../Assets/Images/food_drink.png"
import VideoList from "../VideoList/VideoList"


function VideoPlay() {

   const [video, setVideo] = React.useState([]);

   React.useEffect(() => {
      fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
         .then((res) => res.json())
         .then((data) => {
            setVideo(data);
         });
   }, []);

   return (
      <>
         <section className="section__video__play">
         <div className="video__player">
            <img
               className="video__player--img"
               src={video.thumbnailUrl} alt={video.title}
               width="100%"
               height="700"
            />

            <h2 className="video__play__heading">
               Dude You Re Getting A Telescope
            </h2>

            <div className="video__play__sub">
               <span className="span">
                  123k views
               </span>

               <ul className="video__play__list">

                  <li className="video__play__list__item">
                     <i class="fal fa-thumbs-up"></i> 123k
                  </li>
                  <li className="video__play__list__item">
                     <i class="fal fa-thumbs-down"></i> 435k
                  </li>
                  <li className="video__play__list__item">
                     <i class="fal fa-share"></i>Share
                  </li>
                  <li className="video__play__list__item">
                     <i class="far fa-ellipsis-h"></i>
                  </li>
               </ul>

            </div>

            <div className="Video__play__info">
               <img
                  className="video__img--food"
                  src={FoodDrinkImg}
                  alt="FoodDrink"
                  width="80"
                  height="80"
               />
               <div className="video__play--box">

                  <h3 className="box__heading">
                     Food & Drink
                  </h3>

                  <p className="video__info--t">
                     Published on 14 Jun 2019
                  </p>

                  <p className="video__info--text">
                     A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.
                  </p>

                  <p className="video__info--p">
                  Show more
                  </p>   
               </div>

               <div className="sub__btn">
                  <button class="channel__btn">Subscribe 2.3m</button>
               </div>
            </div>
         </div>
         <VideoList/>
         </section>
      </>
   )
}

export default VideoPlay;