import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = () => {
	return (
		<div>
			<div className="featuredChart">
				<CircularProgressbar
					value={70}
					text={'70%'}
					strokeWidth={5}
				/>
			</div>
		</div>
	);
};

export default CircularProgress;
