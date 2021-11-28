import './ChannelContext.scss';
import React from "react";

import useAside from "../../Hook/useAside";
import ChannelInfo from "../ChannelInfo/ChannelInfo"
import ChannelList from '../ChannelList/ChannelList';
import ChannelMargorita from '../ChannelMargorita/ChannelMargorita';

function ChannelContent() {
   const [open] = useAside();
   

	return (
		<>
			<div className={`channel__content ${open && 'channel__content--auto'}`}>
				<ChannelInfo/>
				<ChannelList/>
				<ChannelMargorita/> 
			</div>
		</>
	);
}

export default ChannelContent;