import "./VideoPlaySection";

import VideoPlay from "../VideoPlay/VideoPlay"


function VideoPlaySection () {
   return (
      <>
         <section className="video__play__section">
         <div className="video__play__section__container">
            <VideoPlay/>
         </div>
         </section>

      </>
   )
}

export default VideoPlaySection;