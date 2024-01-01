import React from 'react';
import { HStack, Stack, Box } from '@mui/material';
import Options from './Menu.js';
import './style.scss';

const nav = () => {
	return (
		<Box className="nav navbar">
			<ul>
				<Stack direction="flex" justifyContent="center">
					{' '}
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<li>Faq</li>
					<li>
						<Options />
					</li>
				</Stack>
			</ul>
		</Box>
	);
};

export default nav;
