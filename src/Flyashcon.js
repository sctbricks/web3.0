// FlyAshBricksInfo.js

import React from 'react';
import './Flyashcon.css';
// import flyAshBricksImage from './fly-ash-bricks.jpg';
// import manufacturingProcessImage from './manufacturing-process.jpg';
// import benefitsImage from './benefits.jpg';
// import significanceImage from './significance.jpg';

const FlyAshBricksInfo = () => {
  return (
    <div className="fly-ash-bricks-info">
      <h2>Fly Ash Bricks</h2>
      <p>
        Fly ash bricks are eco-friendly building materials made from fly ash, a waste generated from coal combustion in thermal power plants. These bricks have gained popularity in construction due to their numerous advantages over conventional clay bricks.
      </p>
      {/* <img src={flyAshBricksImage} alt="Fly Ash Bricks" /> */}
      <h3>Benefits of Fly Ash Bricks</h3>
      <p>
        Fly ash bricks offer several benefits:
      </p>
      <ul>
        <li>Environmentally Friendly: Fly ash bricks utilize industrial waste, reducing the burden on landfills and minimizing environmental pollution.</li>
        <li>Cost-Effective: Production costs of fly ash bricks are lower compared to traditional clay bricks, making them a cost-effective option for construction projects.</li>
        <li>Strength and Durability: These bricks exhibit excellent strength and durability, providing long-lasting structures.</li>
        <li>Thermal Insulation: Fly ash bricks offer better thermal insulation properties, reducing energy consumption for heating and cooling.</li>
        <li>Uniform Size and Shape: They are manufactured in precise dimensions, ensuring uniformity in size and shape, which simplifies construction.</li>
      </ul>
      {/* <img src={benefitsImage} alt="Benefits" /> */}
      <h3>Manufacturing Process</h3>
      <p>
        Fly ash bricks are made by mixing fly ash with water, cement, and sometimes lime. The mixture is then compacted in molds under high pressure and cured in a controlled environment. The curing process enhances the strength and durability of the bricks.
      </p>
      {/* <img src={manufacturingProcessImage} alt="Manufacturing Process" /> */}
      <h3>Significance in Construction</h3>
      <p>
        The use of fly ash bricks in construction offers several advantages. They promote sustainability, enhance structural integrity, and comply with environmental regulations. These bricks play a significant role in creating greener and more resilient structures.
      </p>
      {/* <img src={significanceImage} alt="Significance" /> */}
    </div>
  );
}

export default FlyAshBricksInfo;
