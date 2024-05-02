import React from 'react';
import './Interlocking.css'; // Import CSS file for styling
// import interlockImage from './interlocking-bricks.jpg'; // Import image for interlocking bricks

const InterlockingBricksInfo = () => {
  return (
    <div className="interlocking-bricks-info">
      <h2>Interlocking Bricks</h2>
      <p>
        Interlocking bricks, also known as interlocking concrete pavers, are a popular choice in construction due to their ease of installation, durability, and aesthetic appeal. These bricks are designed to fit together like a puzzle, eliminating the need for mortar or other adhesives.
      </p>
      {/* <img src={interlockImage} alt="Interlocking Bricks" /> */}
      <h3>Benefits of Interlocking Bricks</h3>
      <p>
        Interlocking bricks offer several benefits:
      </p>
      <ul>
        <li>Durable: Interlocking bricks are made from high-quality materials, resulting in durable and long-lasting structures.</li>
        <li>Easy Installation: These bricks can be easily installed without the need for specialized tools or skills, reducing construction time and labor costs.</li>
        <li>Versatility: Interlocking bricks come in various shapes, sizes, and colors, allowing for endless design possibilities.</li>
        <li>Permeability: The gaps between interlocking bricks allow water to drain through, reducing the risk of water pooling and flooding.</li>
        <li>Low Maintenance: Once installed, interlocking brick pavements require minimal maintenance, saving time and resources.</li>
      </ul>
      <h3>Applications</h3>
      <p>
        Interlocking bricks are commonly used for:
      </p>
      <ul>
        <li>Driveways</li>
        <li>Patios</li>
        <li>Walkways</li>
        <li>Pool decks</li>
        <li>Landscaping</li>
        <li>And more...</li>
      </ul>
    </div>
  );
}

export default InterlockingBricksInfo;
