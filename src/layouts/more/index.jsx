import { Box } from '@mui/material';
import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const index = () => {
	return (
		<Box>
			<Nav />
			<Outlet />
			<Box>footer</Box>
		</Box>
	);
};

export default index;
