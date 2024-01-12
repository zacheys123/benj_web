import React from 'react';
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
