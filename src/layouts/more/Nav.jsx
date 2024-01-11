import React from 'react';
import logo from '../../assets/logo.jpeg';
import { Stack, Box, Button, Avatar } from '@mui/material';
import './style.css';
const Nav = () => {
	return (
		<Box
			sx={{
				display: 'flex !important',
				justifyContent: 'space-between',
				width: '100%',
			}}
			className="classes__nav"
		>
			<Box className="classes__logo">
				<img
					src={logo}
					alt=""
					style={{ width: '83px', borderRadius: '97px' }}
				/>
			</Box>
			<Box className="classes__user">
				{' '}
				<Box className="classes__buttons">
					<Button variant="outlined" size="small">
						Register
					</Button>
					<Button variant="contained" size="small">
						Log in
					</Button>{' '}
				</Box>
				<Avatar size={150} className="classes__avatar">
					z
				</Avatar>
			</Box>
		</Box>
	);
};

export default Nav;
