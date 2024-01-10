import React, { useState } from 'react';
import { images } from './image_data';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box } from '@mui/material';
import './image.scss';
const Image = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handlePrevious = () => {
		setCurrentSlide(
			currentSlide === 0 ? images.length - 1 : currentSlide - 1,
		);
	};
	const handleNext = () => {
		setCurrentSlide(
			currentSlide === images.length - 1 ? 0 : currentSlide + 1,
		);
	};

	return (
		<Box className="container">
			<ArrowCircleLeftIcon
				className="arrow arrow__left"
				onClick={handlePrevious}
			/>
			{images &&
				images?.map((imageItem, index) => {
					return (
						<img
							key={imageItem.id}
							src={imageItem.pic}
							alt={imageItem.title}
							className={
								currentSlide === index
									? 'current__image'
									: 'hide-current-image'
							}
						/>
					);
				})}
			<ArrowCircleRightIcon
				className="arrow arrow__right"
				onClick={handleNext}
			/>
		</Box>
	);
};
export default Image;
