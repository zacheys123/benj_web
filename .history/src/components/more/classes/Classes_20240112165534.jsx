import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import './classes.scss';
import { motion } from 'framer-motion';
const Classes = () => {
	const [daily, setdaily] = useState(false);
	const [weekly, setWeekly] = useState(false);
	const [payment, setPayment] = useState(false);
	const [enrol, setEnroll] = useState(false);
	const [modal, setModal] = useState(true);
	const [personal, setPersonal] = useState(true);
	const [days, setDays] = useState('');
	const [getdays, setGetDays] = useState([]);
	function handlePayment() {
		setPersonal(true);
		setPayment(true);
	}
	function handleEnrol() {
		setEnroll(true);
		setPayment(false);
	}
	let cpydays = [days];
	let secondarray = [];

	const handleDays = (ev) => {
		setDays(ev.target.value);

		if (days === '') {
			cpydays.length = 0;
		}
		if (!secondarray.includes(days)) {
			secondarray.push(ev.target.value);
			cpydays.push(...secondarray);
			setGetDays(cpydays);
		} else {
			secondarray.splice(ev.target.value, 1);
		}
	};
	console.log(getdays);
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
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					N/B:To be Enrolled to any class you have to register aas aa
					member first.
					<Button variant="contained" onClick={() => setModal(false)}>
						Enroll to Any class
					</Button>
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
			<Box className="classes__modal">
				-
				{!modal && (
					<Box className="classes__modalform">
						<Typography variant="h5">Enroll here</Typography>

						<form action="">
							{!personal && (
								<div>
									<Typography
										variant="body1"
										sx={{ fontSize: '.7rem' }}
									>
										Personal Profile
									</Typography>
									<input type="text" placeholder="Enter first Name" />
									<input
										type="text"
										placeholder="Enter Second Name"
									/>
									<input type="text" placeholder="Tel no" />
									<select name="" id="">
										<option>Experience</option>
										<option value="beginner">Piano Classes</option>
										<option value="inter">Intermediate</option>{' '}
										<option value="advance">Advanced</option>
									</select>
									<select name="" id="">
										<option>Checkout Classes</option>
										<option value="piano">Piano Classes</option>
										<option value="guitar">Guitar Lessons</option>
										<option value="vocal">Vocal Lessons</option>{' '}
										<option value="drum">Drum Lessons</option>{' '}
										<option value="saxophone">Saxophone</option>
										<option value="bass">Bass Lessons</option>
										<option value="songwritting">
											Song Writting
										</option>
										<option value="live">Live Perfomance</option>{' '}
									</select>
									<div>
										{' '}
										<Button
											variant="outlined"
											onClick={handlePayment}
										>
											Next
										</Button>
									</div>
								</div>
							)}
							{payment && (
								<motion.div
									initial={{ x: '330px', opacity: 0 }}
									animate={{
										x: 0,
										opacity: 1,
										transition: { duration: 0.7 },
									}}
									className="classes__payment"
								>
									<Typography variant="subtitle2">
										Payment info
									</Typography>
									Total period:12 months
									<div>
										<Button
											variant="contained"
											onClick={() => {
												setdaily(true);
												setWeekly(false);
											}}
											className="button"
										>
											Daily Classes
										</Button>
										<Button
											variant="contained"
											onClick={() => {
												setdaily(false);
												setWeekly(true);
											}}
											className="button"
										>
											Weekly Classes
										</Button>
									</div>
									{daily && (
										<div className="classes__daily">
											<input
												type="text"
												value="daily"
												readOnly="readOnly"
											/>
											<select name="" id="">
												<option value="10">
													between 10am and 11pm
												</option>
												<option value="11">
													between 11am and 12pm
												</option>{' '}
												<option value="1">between 1pm and 2pm</option>{' '}
												<option value="2">between 2pm and 3pm</option>{' '}
												<option value="5">between 5pm and 6pm</option>
											</select>
											<Button
												variant="contained"
												onClick={handleEnrol}
											>
												Next
											</Button>
										</div>
									)}
									{weekly && (
										<div className="classes__weekly">
											<input
												type="text"
												value="weekly"
												readOnly="readOnly"
											/>
											<select
												name=""
												id=""
												value={days}
												onChange={handleDays}
											>
												s<option>Choose three days</option>{' '}
												<option value="Monday">Monday</option>{' '}
												<option value="Wednesday">wednesday</option>{' '}
												<option value="Thursday">Thursday</option>{' '}
												<option value="Friday">Friday</option>{' '}
												<option value="Saturday">Saturday</option>{' '}
											</select>
											<textarea
												style={{ resize: 'none' }}
												type="text"
												cols="40"
												rows="3"
												placeholder="Days chosen appear here!"
											></textarea>{' '}
											<select name="" id="">
												<option value="10"> 10am to 12pm</option>
												<option value="1">1pm to 3pm</option>{' '}
												<option value="1"> 3pm to 5pm</option>{' '}
												<option value="2"> 5pm to 7pm</option>{' '}
											</select>
											<Button
												variant="contained"
												onClick={handleEnrol}
											>
												Next
											</Button>
										</div>
									)}
								</motion.div>
							)}
							{enrol && (
								<motion.div
									initial={{ x: '330px', opacity: 0 }}
									animate={{
										x: 0,
										opacity: 1,
										transition: { duration: 0.7 },
									}}
									className="classes__enrol"
								>
									<div>
										{' '}
										<input
											type="text"
											placeholder="What is your goal?"
											readOnly="readOnly"
										/>
									</div>
									<Button variant="contained">Enroll Now!!! </Button>

									<input
										type="text"
										placeholder="Enter your Email address"
									/>
									<Button
										type="submit"
										variant="contained"
										className="button"
									>
										SUBSCRIBE
									</Button>
								</motion.div>
							)}
						</form>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Classes;
