import React from 'react';
import SideNav from './components/SideNav';
import Main from './components/Main';
import TeamDashboard from './components/TeamDashboard';
import './styles/Home.css';

const Home = () => {
	return (
		<div className="home">
			<SideNav />
			<Main />
			<TeamDashboard />
		</div>
	);
};

export default Home;
