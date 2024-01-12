import React from 'react';
import Nav from '../main/Nav';
import { Outlet } from 'react-router-dom';

const index = () => {
	return (
		<div>
			<Nav />
			<Outlet />
		</div>
	);
};

export default index;
