import React from 'react';
import { ScriptableContext } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const data = {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
	datasets: [
		{
			label: 'First dataset',
			data: [33, 53, 85, 41, 44, 65],
			fill: true,
			barThickness: 12,
			backgroundColor: (context) => {
				const ctx = context.chart.ctx;
				const gradient = ctx.createLinearGradient(0, 0, 0, 200);
				gradient.addColorStop(0.4, 'rgb(255,255,255)');
				gradient.addColorStop(0.4, 'rgba(250,174,50,1)');

				return gradient;
			},
		},
	],
};

export default function BarChart() {
	return (
		<div>
			<Bar data={data} />
		</div>
	);
}
