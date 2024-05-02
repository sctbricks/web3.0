import React from 'react';
import './HollowBricks.css'; // Import CSS file for styling
// import hollowBricksImage from './hollow-bricks.jpg'; // Import image for hollow bricks

const HollowBricksInfo = () => {
  return (
    <div className="hollow-bricks-info">
      <h2>Hollow Bricks</h2>
      <p>
        Hollow bricks, also known as hollow concrete blocks, are widely used in construction for their lightweight nature, thermal insulation properties, and structural strength, making them ideal for various building applications.
      </p>
      {/* <img src={hollowBricksImage} alt="Hollow Bricks" /> */}
      <h3>Benefits of Hollow Bricks</h3>
      <p>
        Hollow bricks offer several benefits:
      </p>
      <ul>
        <li>Lightweight: Hollow bricks are lightweight, making them easier to handle and transport, reducing labor costs and construction time.</li>
        <li>Thermal Insulation: The hollow core of these bricks provides excellent thermal insulation, helping to maintain comfortable indoor temperatures and reduce energy consumption.</li>
        <li>Structural Strength: Despite their lightweight, hollow bricks offer good structural strength, making them suitable for load-bearing walls and structural applications.</li>
        <li>Soundproofing: The air-filled cavities in hollow bricks help in soundproofing, reducing noise transmission between rooms.</li>
        <li>Cost-Effective: Hollow bricks are cost-effective compared to solid bricks, making them a budget-friendly choice for construction projects.</li>
      </ul>
      <h3>Applications</h3>
      <p>
        Hollow bricks are commonly used for:
      </p>
      <ul>
        <li>Partition walls</li>
        <li>Exterior walls</li>
        <li>Non-load-bearing walls</li>
        <li>Facade cladding</li>
        <li>And more...</li>
      </ul>
    </div>
  );
}

export default HollowBricksInfo;
