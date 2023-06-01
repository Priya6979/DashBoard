import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomPaginationActionsTable from './TableData';

const Table = () => {
	const [data, setData] = useState([]);
	const config = {
		headers: {
			'X-RapidAPI-Key': '7cc5880a9amshbcb0f141e0084ebp153fbbjsn6febff360f6f',
			'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
		},
	};
	useEffect(() => {
		axios
			.get('https://covid-19-statistics.p.rapidapi.com/regions', config)
			.then((res) => {
				console.log(res.data.data);
				setData(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			{/* <TableData items={data} /> */}
			<CustomPaginationActionsTable props={data} />
		</div>
	);
};

export default Table;
