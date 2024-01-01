import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './Nav';
import { Box, Stack } from '@mui/material';

const index = () => {
	return (
		<Box width="100%" height="100%">
			<Box className="nav">
				<Nav />
			</Box>
			<Box className="body">
				{' '}
				<Outlet />
			</Box>
		</Box>
	);
};

export default index;
