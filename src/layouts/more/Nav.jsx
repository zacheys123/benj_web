import React from 'react';
import logo from '../../assets/logo.jpeg';
import { Stack, Box, Button, Avatar } from '@mui/material';
import './style.css';
const Nav = () => {
	return (
		<Stack
			className="classes__nav"
			direction="flex"
			justifyContent="space-between"
			width="100%"
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
				<Avatar
					round={true}
					maxInitials={1}
					size={150}
					className="classes__avatar"
				>
					z
				</Avatar>
			</Box>
		</Stack>
	);
};

export default Nav;
