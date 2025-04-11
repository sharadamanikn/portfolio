import React from 'react';
import './education.css';

const Education = (): React.ReactNode => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-label">
          <h2 className="education-title">Education</h2>
        </div>
        <div className="education-content">
          <div className="education-card">
            <div className="education-header">
              <h3>Bachelor of Engineering</h3>
              <div className="pill-group">
                <span className="pill company">Information Science and Engineering</span>
                <span className="pill date">2021-2025</span>
              </div>
            </div>
            <p className="education-description">
              <p>Siddaganga Institute of Technology</p>  
              <p>9.06 CGPA</p>    
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
