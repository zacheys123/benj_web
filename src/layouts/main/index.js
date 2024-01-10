import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './Nav';
import { Box, Stack } from '@mui/material';

const index = () => {
	return (
		<Box>
			<Box className="nav">
				<Nav />
			</Box>
			<Box className="body">
				{' '}
				<Outlet />
			</Box>
			<Box className="footer">Footer here</Box>
		</Box>
	);
};

export default index;
