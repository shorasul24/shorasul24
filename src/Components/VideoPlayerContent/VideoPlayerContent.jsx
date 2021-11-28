import "./VideoPlayerContent.scss";

import useAside from "../../Hook/useAside";
import VideoPlaySection from "../VideoPlaySection/VideoPlaySection"

function VideoPlayerContent () {
   const [open] = useAside();
   return (
      <>
      <section className="video__play--g">
      <div className={`video__content ${open && 'video__content--auto'}`}>
            <VideoPlaySection/>
         </div>
      </section>
      </>
   )
}

export default VideoPlayerContent;