import "./Profile.css"

const Header = (): React.ReactNode => {
	return (
		<div className="header-container">
			<div className="navbar-content">
				<div className="navbar-profile">
					<img src="/icons/profile.jpg" alt="Profile" className="profile-img" />
				</div>

				<div className="navbar-text-block">
					<div className="navbar-name">Sharadamani K N (Fullstack Developer)</div>
					<div className="navbar-roles">
						<button className="navbar-role">Intern</button>
					</div>
					<div className="navbar-socials">
						<a href="https://www.linkedin.com/in/sharadamani-k-n-44663124b/" target="_blank">
							<img src="/icons/linkedin.svg" alt="LinkedIn" />
							<span>LinkedIn</span>
						</a>
						<a href="https://github.com/sharadamanikn" target="_blank">
							<img src="/icons/github.svg" alt="Github" />
							<span>Github</span>
						</a>
						<a href="https://www.instagram.com/sharda_mani_?igsh=MXRvbTVmZzR4dGdxMQ==" target="_blank">
							<img src="/icons/instagram.svg" alt="Instagram" />
							<span>Instagram</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
