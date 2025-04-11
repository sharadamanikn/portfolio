import React from "react";
import "./projects.css";
const Project = (): React.ReactNode => {
	return (
		<section className="project-section">
			<div className="project-container">
                
				<div className="project-title">
					<h2>Projects</h2>
				</div>

				<div className="projects-grid">
					<a
						className="projects-grid"
						href="https://github.com/sharadamanikn/hackernews-server"
						target="_blank"
					>
						<div className="projects-grid-name">
							<div className="project-header">
								<h3>HackerNews Server</h3>
								<span className="pill-content">Backend Project</span>
							</div>
							<div>
								<p>A TypeScript-based Node.js server that implements the backend of the HackerNews</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Project;
