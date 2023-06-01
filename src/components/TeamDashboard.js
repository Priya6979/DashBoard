import React from 'react';
import KeyIcon from '@mui/icons-material/Key';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Logo from '../images/icon.png';
import '../styles/TeamDashboard.css';

const TeamDashboard = () => {
	return (
		<div>
			<div className="wrapper-right">
				<div className="team-member-icon">
					<div className="top-icon">
						<div className="team-member">
							<p>Team Members</p>
						</div>
						<div className="icon">
							<button className="custom-btn green">
								<KeyIcon />
							</button>
							<button className="custom-btn red">
								<DeleteForeverIcon />
							</button>
							<button className="custom-btn orange">
								<AddBoxIcon />
							</button>
						</div>
					</div>

					<div className="name-designation">
						<div className="img-icon">
							<div className="img-name">
								<div className="profile_pic">
									<img src={Logo} />
									<h4 style={{ display: 'inline' }}>Wade</h4>
								</div>
								<p>IT Manager</p>
							</div>
							<div className="img-name">
								<div className="profile_pic">
									<img src={Logo} />
									<h4 style={{ display: 'inline' }}>Wade</h4>
								</div>
								<p>IT Manager</p>
							</div>
							<div className="img-name">
								<div className="profile_pic">
									<img src={Logo} />
									<h4 style={{ display: 'inline' }}>Wade</h4>
								</div>
								<p>IT Manager</p>
							</div>
							<div className="img-name">
								<div className="profile_pic">
									<img src={Logo} />
									<h4 style={{ display: 'inline' }}>Wade</h4>
								</div>
								<p>IT Manager</p>
							</div>
							<div className="img-name">
								<div className="profile_pic">
									<img src={Logo} />
									<h4 style={{ display: 'inline' }}>Wade</h4>
								</div>
								<p>IT Manager</p>
							</div>
							<div className="img-name">
								<div className="profile_pic">
									<img src={Logo} />
									<h4 style={{ display: 'inline' }}>Wade</h4>
								</div>
								<p>IT Manager</p>
							</div>
						</div>
					</div>

					<div className="bottom-chat">
						<div heading_chat_noti>
							<h3> Admin Team Communication </h3>
							<h3>Chat notification</h3>
						</div>

						<div className="img-txt">
							<div className="profile_pic">
								<img src={Logo} />
							</div>
							<p>Hi, Hope You are doing well.</p>
						</div>
						<div className="img-txt">
							<div className="profile_pic">
								<img src={Logo} />
							</div>
							<p>Hi, Hope You are doing well.</p>
						</div>
						<div className="img-txt">
							<div className="profile_pic">
								<img src={Logo} />
							</div>
							<p>Hi, Hope You are doing well.</p>
						</div>
						<div className="img-txt">
							<div className="profile_pic">
								<img src={Logo} />
							</div>
							<p>Hi, Hope You are doing well.</p>
						</div>
						<div className="img-txt">
							<div className="profile_pic">
								<img src={Logo} />
							</div>
							<p>Hi, Hope You are doing well.</p>
						</div>
						<div className="img-txt">
							<div className="profile_pic">
								<img src={Logo} />
							</div>
							<p>Hi, Hope You are doing well.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamDashboard;
