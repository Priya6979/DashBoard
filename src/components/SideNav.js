import React from 'react';
import icon from '../images/icon.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ImageIcon from '@mui/icons-material/Image';
import Logo from '../images/icon.png';
import '../styles/SideNav.css';
const SideNav = () => {
	return (
		<div>
			<div className="wrapper">
				<div className="img-content">
					<div className="img-text">
						<div className="img">
							{' '}
							<img
								className="img-logo"
								src={Logo}
								alt="logo"
							/>
						</div>

						<p>Customer Care</p>
						<p>Admin</p>
					</div>
					<div className="sideNav-content">
						<div className="sideNav_items">
							<h3>
								<span>
									<DashboardIcon />
								</span>
								<h3 className="sidenav-item">Dashboard</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<MessageIcon />
								</span>
								<h3 className="sidenav-item">Messages</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<CalendarTodayIcon />
								</span>
								<h3 className="sidenav-item">Schedule</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<BarChartIcon />
								</span>
								<h3 className="sidenav-item">Statistics</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<PeopleIcon />
								</span>
								<h3 className="sidenav-item">Community</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<SettingsIcon />
								</span>
								<h3 className="sidenav-item">Setting</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<AccessibilityIcon />
								</span>
								<h3 className="sidenav-item">Ladder</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<DashboardIcon />
								</span>
								<h3 className="sidenav-item">Hall of Fame</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<DashboardIcon />
								</span>
								<h3 className="sidenav-item">Tournament</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<ImageIcon />
								</span>
								<h3 className="sidenav-item">User Manage</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<ImageIcon />
								</span>
								<h3 className="sidenav-item">Results</h3>
							</h3>
						</div>
						<div className="sideNav_items">
							<h3>
								<span>
									{' '}
									<ImageIcon />
								</span>
								<h3 className="sidenav-item">News Letter</h3>
							</h3>
						</div>
					</div>
					<div className="sideNav_items footer">
						<h2>Logout</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
