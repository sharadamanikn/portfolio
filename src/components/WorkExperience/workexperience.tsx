import React from 'react';
import './workexperience.css';

const WorkExperience = (): React.ReactNode => {
  return (
    <section id="experience" className="work-section">
      <div className="experience-container">
        <div className="experience-label">
          <h2 className="section-title">Work Experience</h2>
        </div>
        <div className="experience-content">
          <div className="work-card">
            <div className="work-header">
              <h3>FullStack AI Developer</h3>
              <div className="pill-group">
                <span className="pill company">StackLane</span>
                <span className="pill date">2025</span>
              </div>
            </div>
            <p className="work-description">
              Currently learning Fullstack Development from scratch.
              Started with backend development and presently learning frontend development.        
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
