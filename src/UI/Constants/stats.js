import React from 'react';
import '../../UI/style.css'; 
export default function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-grid">
        <div className="stat-item">
          <h6 className="stat-value">144K</h6>
          <p className="stat-label">Downloads</p>
        </div>
        <div className="stat-item">
          <h6 className="stat-value">12.9K</h6>
          <p className="stat-label">Subscribers</p>
        </div>
        <div className="stat-item">
          <h6 className="stat-value">27.3K</h6>
          <p className="stat-label">Users</p>
        </div>
        <div className="moving-dotA" />
        <div className="moving-dotB" />
        <div className="moving-dotC" />
        <div className="moving-dotD" />
      </div>
    </div>
  );
};
