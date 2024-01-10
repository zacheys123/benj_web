import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../main/Nav';

const index = () => {
	return (
		<div>
			<Nav />
			<Outlet />
		</div>
	);
};

export default index;
