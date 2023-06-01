import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
export default function LinearProgressBar({ percentage }) {
	const [currentPercentage, setPercentage] = React.useState(10);
	React.useEffect(() => {
		const timer = setInterval(() => {
			setPercentage(percentage);
		}, 500);
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<div style={{ width: '700px' }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Box sx={{ width: '100%', mr: 1 }}>
					<LinearProgress
						width="50%"
						variant="determinate"
						value={currentPercentage}
					/>
				</Box>
				{`${Math.round(currentPercentage)}%`}
			</Box>
		</div>
	);
}
