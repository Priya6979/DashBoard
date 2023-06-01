import React from 'react';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const data = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'Second dataset',
			data: [33, 25, 35, 51, 54, 76],
			fill: false,
			lineTension: 0.4,
			borderColor: '#eb2632',
		},
	],
};

export default function LineChart({ height, width }) {
	console.log(height, width);
	return (
		<div>
			<Line
				data={data}
				width={width}
				height={height}
			/>
		</div>
	);
}
