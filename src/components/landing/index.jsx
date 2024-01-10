import React from 'react';
import './landing.scss';
import { Box, Button, Typography } from '@mui/material';
import Image from '../image-drawer/Image';
import logo from '../../assets/logo.jpeg';
import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight';
import { useNavigate } from 'react-router-dom';
import ArrowRight from '@mui/icons-material/ArrowRightAlt';
const LandingPage = () => {
	const nav = useNavigate();
	return (
		<Box className="landing__page">
			<Box className="landing__main">
				<Box className="left__side">
					<img src={logo} alt="" />
					<Box>
						<h4>"Inspiring the world through music"</h4>
					</Box>
					<Box sx={{ textAlign: 'center' }}>
						<span style={{ fontSize: '2rem' }}>
							Hi{' '}
							<span
								style={{
									color: 'yellow',
									bordercolor: 'yellow',
									fontSize: '1.9rem',
								}}
							>
								🖐
							</span>
							,
						</span>{' '}
						<Typography className="info">
							if you wish to explore further and know more about
							benj_band click on the explore button below,
						</Typography>
					</Box>
					<Box className="explore">
						<Box
							className="button"
							onClick={() => {
								nav('/home');
							}}
						>
							<span
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-around',
								}}
							>
								{' '}
								Explore
								<ArrowRight />
							</span>
						</Box>
					</Box>
				</Box>
				<Box className="right__side">
					<Box className="landing__cover">
						<Image />
					</Box>

					<Box className="landing__info">
						<p>
							&nbsp;&nbsp;Welcome on benj_band landing page,this page
							allows you to encountrer benj_band for the first time
							and it gives you the feeling of home.This page also
							gives you access to other projects and platforms that
							the band has been involved in ovver the years.By
							accessing <a href="/pages/about">here</a> you will gett
							to know the band and its members alittle more.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;Benj_baand has been involved in
							projects tthat give baack to the commmunity also
							inspires the youths in a more direct way{' '}
							<a href="">see here</a>.
						</p>
					</Box>
				</Box>
			</Box>
			<Box sx={{ textAlign: 'center' }} className="footer">
				<Box className="footer__input">
					<div>
						<p>Subscribe to our newsLetter</p>
						<form action="">
							<input
								type="text"
								placeholder="Enter your  Email Address"
							/>
							<div>
								{' '}
								<button type="submit">Subscribe</button>
							</div>
						</form>
					</div>
				</Box>
			</Box>
		</Box>
	);
};

export default LandingPage;
