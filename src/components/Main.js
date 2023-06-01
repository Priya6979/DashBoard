import React from 'react';
import '../styles/Main.css';

import BarChart from './BarChart';

import LineChart from './Line';
import CircularProgress from './CircularProgress';
import LinearProgressBar from './LinearProgress';
import Table from './Table';

const Main = () => {
	return (
		<div>
			<div className="main-container">
				<div className="heading">
					<h1>Dashboard</h1>
				</div>
				<div className="cards-container">
					<div className="top-card">
						<div className=" flex box">
							<div className="txt-num">
								<p>Total User</p>
								<h2>5672</h2>
								<p>+14% Inc</p>
							</div>
							<div className="loading-score">
								<CircularProgress />
							</div>
						</div>

						<div className=" flex box">
							<div className="txt-num">
								<p>Total User</p>
								<h2>5672</h2>
								<p>+14% Inc</p>
							</div>
							<div className="loading-score">
								<CircularProgress />
							</div>
						</div>

						<div className=" flex box">
							<div className="txt-num">
								<p>Total User</p>
								<h2>5672</h2>
								<p>+14% Inc</p>
							</div>
							<div className="loading-score">
								<CircularProgress />
							</div>
						</div>
					</div>
				</div>
				<div className="centre_charts">
					<div className="line_content">
						<LineChart
							height={50}
							width={100}
						/>
					</div>
					<div className="bar_content">
						<BarChart />
					</div>
				</div>
				<div className="bottom_progress">
					<div className="progressBar-txt">
						<div className="head_progress">
							<h3>
								By Country
								<span></span>
							</h3>
						</div>
						<div className="country_info">
							<ul>
								<li className="country-info-item">
									<span>United States</span>
									<LinearProgressBar percentage={80} />
								</li>
								<li className="country-info-item">
									<span>Germany</span>
									<LinearProgressBar percentage={50} />
								</li>
								<li className="country-info-item">
									<span>Australia</span>
									<LinearProgressBar percentage={40} />
								</li>
								<li className="country-info-item">
									<span>India</span>
									<LinearProgressBar percentage={15} />
								</li>
								<li className="country-info-item">
									<span>China</span>
									<LinearProgressBar percentage={70} />
								</li>
								<li className="country-info-item">
									<span>Pakistan</span>
									<LinearProgressBar percentage={90} />
								</li>
							</ul>
						</div>
					</div>

					<div className="line_content">
						<LineChart
							height={260}
							width={300}
						/>
					</div>

					<div className="progressBar-txt">
						<div className="head_progress">
							<h3>
								By Country
								<span></span>
							</h3>
						</div>
						<div className="country_info">
							<ul>
								<li className="country-info-item">
									<span>United States</span>
									<LinearProgressBar percentage={80} />
								</li>
								<li className="country-info-item">
									<span>Germany</span>
									<LinearProgressBar percentage={50} />
								</li>
								<li className="country-info-item">
									<span>Australia</span>
									<LinearProgressBar percentage={40} />
								</li>
								<li className="country-info-item">
									<span>India</span>
									<LinearProgressBar percentage={15} />
								</li>
								<li className="country-info-item">
									<span>China</span>
									<LinearProgressBar percentage={70} />
								</li>
								<li className="country-info-item">
									<span>Pakistan</span>
									<LinearProgressBar percentage={90} />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="table">
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Main;
