import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './nav';

const index = () => {
	return (
		<div>
			<Nav />
			<Outlet />
		</div>
	);
};

export default index;
