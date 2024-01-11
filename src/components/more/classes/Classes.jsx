import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import './classes.scss';
const Classes = () => {
	return (
		<Box className="classes__mainpage">
			<Box className="classes__leftside">
				<Typography variant="subtitle2" className="h2">
					At Benj School of Music we offer:
				</Typography>
				<ul type="disc">
					<li>Piano Classes</li>
					<li>Guitar Classes</li>
					<li>Vocal Classes</li>
					<li>Drum Classes</li>
					<li>Saxophone Lessons</li>
					<li>Bass guitar Lessons</li>
					<li>Song Writting</li>
					<li>Live Performance Master class</li>
				</ul>
				<Box>
					<Button variant="outlined">Register as a Member</Button>
				</Box>
			</Box>
			<div
				style={{
					border: '1px solid rgb(224, 221, 221)',
					opacity: 0.5,
					marginLeft: ' 1rem',
				}}
			></div>
			<Box className="classes__rightside"></Box>
		</Box>
	);
};

export default Classes;
