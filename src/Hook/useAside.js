import React from 'react';

import { Context } from '../Context/Aside';

function useAside(asideClose) {
	const ctx = React.useContext(Context);

	return asideClose ? [ctx.setState] : [ctx.state, ctx.setState];
}

export default useAside;
