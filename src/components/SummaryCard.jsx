import React from 'react';
import './SummaryCard.css';

function SummaryCard({ title, count, icon, color, description }) {
return (
<div className="summary-card">
<div className="summary-card-top">
<div className={"summary-icon ${color}"}>
{icon}
</div>

    <span className="summary-menu">•••</span>
  </div>

  <div className="summary-card-content">
    <p className="summary-title">{title}</p>
    <h2 className="summary-count">{count}</h2>
    <p className="summary-description">{description}</p>
  </div>
</div>

);
}

export default SummaryCard;