import './ChannelMain.scss';

import ChannelContent from "../ChannelContext/ChannelContext";
import Aside from "../Aside/Aside"

function ChannelMain () {

   return (
      <channelmain clssName="channel__main">
         <div className="channel__main__container">
            <Aside/>

            <ChannelContent/>
         </div>
      </channelmain>
   )
}

export default ChannelMain;