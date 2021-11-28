import "./ChannelInfo.scss";

import ChannelHasImage from '../../Assets/Images/chanel_user.png';

function ChannelInfo() {

   return (
      <section className="channel__info">
         <div className="channel__info__container">
            <div className="channel__inner">
               <h2 className='visually-hidden'>
                  Channel section main content
               </h2>

               <div className="channel__inner--img"></div>

               <div className='channel__has'>
                  <img
                     className="channel__img"
                     src={ChannelHasImage}
                     alt='Channel user img'
                     width='80'
                     height='80'
                  />

                  <div className='channel__has-info'>
                     <strong className='channel__has-name'>
                        Margaret Phelps
                     </strong>

                     <span className='channel__has-subscribers'>
                        245K subscribed
                     </span>
                  </div>
                  <div>
                     <button className='channel__bell-icon'>
                        <i className="far fa-bell"></i>
                     </button>

                     <button className="channel__btn">
                        Subscribe 2.3m
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ChannelInfo;