import React from 'react';
import './Aggregates.css'; // Import CSS file for styling
// import aggregatesImage from './aggregates.jpg'; // Import image for aggregates

const AggregatesInfo = () => {
  return (
    <div className="aggregates-info">
      <h2>Aggregates</h2>
      <p>
        Aggregates are essential components in construction, typically referring to granular materials such as sand, gravel, crushed stone, or recycled concrete.
      </p>
      {/* <img src={aggregatesImage} alt="Aggregates" /> */}
      <h3>Types of Aggregates</h3>
      <p>
        Common types of aggregates include:
      </p>
      <ul>
        <li>Sand</li>
        <li>Gravel</li>
        <li>Crushed stone</li>
        <li>Recycled concrete</li>
        <li>And more...</li>
      </ul>
      <h3>Applications</h3>
      <p>
        Aggregates are used for various construction purposes, including:
      </p>
      <ul>
        <li>Concrete production</li>
        <li>Asphalt production</li>
        <li>Road construction</li>
        <li>Building foundations</li>
        <li>Drainage systems</li>
        <li>And more...</li>
      </ul>
    </div>
  );
}

export default AggregatesInfo;
