import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './products.css'; // Import the CSS file
import image1 from './hollow.png'; // Import your images
import image2 from './flyash.png';
import image3 from './interlock.png';
import image4 from './solid.png';
import image5 from './aggre.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container"> {/* Add the container class */}
      <Slider {...settings}>
        <div className="slide">
          <div className="slide-box">
            <img src={image1} alt="Hollow Bricks" />
            <h3>Hollow Bricks</h3>
            <p>hollow concrete blocks, are widely used in construction for their lightweight nature, thermal insulation properties, and structural strength, making them ideal for various building applications.</p>
            <Link to="/service/Hollow-brick">
              <button>Read more</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image2} alt="Flyash Bricks" />
            <h3>Flyash Bricks</h3>
            <p>Fly ash bricks offer eco-friendly construction solutions with superior strength and cost-effectiveness, reducing environmental impact while ensuring durability.</p>
            <Link to="/service/Flyash-brick">
              <button>Read more</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image3} alt="Interlock Bricks" />
            <h3>Interlock Bricks</h3>
            <p>Interlocking concrete pavers, are a popular choice in construction due to their ease of installation, durability, and aesthetic appeal</p>
            <Link to="/service/InterLocking-brick">
              <button>Read more</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image4} alt="Solid Bricks" />
            <h3>Solid Bricks</h3>
            <p>Solid concrete blocks or solid clay bricks, are dense, heavy bricks used in construction for their robustness and load-bearing capacity, providing stability and strength to structures.</p>
            <Link to="/service/Solid-brick">
              <button>Read more</button>
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="slide-box">
            <img src={image5} alt="Aggregates" />
            <h3>Aggregates</h3>
            <p>Aggregates are essential components in construction, typically referring to granular materials such as sand, gravel, crushed stone, or recycled concrete.</p>
            <Link to="/service/Aggregates">
              <button>Read more</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
