import React, { useEffect, useState } from 'react';
import { HStack, Stack, Box } from '@mui/material';
import Options from '../main/Menu.js';
import Nav from '../main/Nav';
import logo from '../../assets/logo.jpeg';
import { useNavigate, Link, useLocation } from 'react-router-dom';
const Nav = () => {
	const nav = useNavigate();
	const [links, setLinks] = useState('home');
	console.log(links);
	const location = useLocation();
	return (
		<Box className="nav navbar">
			<Stack
				direction="flex"
				width="100vw"
				justifyContent="space-around"
				alignItems="center"
			>
				{' '}
				<Box className="logo">
					<img src={logo} alt="" />
				</Box>
				<Stack
					direction="flex"
					justifyContent="center"
					alignItems="center"
				>
					{' '}
					<li
						onClick={() => {
							setLinks('home');
							nav('/home');
						}}
					>
						Home
						{location.pathname === '/home' ? (
							<hr style={{ color: 'red', lineHeight: 0 }} />
						) : (
							<></>
						)}
					</li>
					<li
						onClick={() => {
							setLinks('about');
							nav('/pages/about');
						}}
					>
						About{' '}
						{location.pathname === '/pages/about' ? (
							<hr style={{ color: 'red', lineHeight: 0 }} />
						) : (
							<></>
						)}
					</li>
					<li
						onClick={() => {
							setLinks('contact');
							nav('/pages/contact');
						}}
					>
						Contact{' '}
						{location.pathname === '/pages/contact' ? (
							<hr style={{ color: 'red', lineHeight: 0 }} />
						) : (
							<></>
						)}
					</li>
					<li
						onClick={() => {
							setLinks('faq');
							nav('/pages/faq');
						}}
					>
						Faq{' '}
						{links === 'faq' && location.pathname === '/pages/faq' ? (
							<hr style={{ color: 'red', lineHeight: 0 }} />
						) : (
							<></>
						)}
					</li>
					<li>
						<Options />
					</li>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Nav;
