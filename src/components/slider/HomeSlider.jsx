import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";



export default function SimpleSlider() {
        const navigate = useNavigate();

        const goToContact= () =>{
                navigate("/contact")
        };

  var settings = {
    dots: true,   
    infinite: true,
    //speed: 500,
    slidesToShow: 1,
    //slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    //variableWidth: true,
    adaptiveHeight: true
  };
  return (
    <Slider {...settings}>
      
      <div className="image-slider">
              <h1 className="header">Installation & Repairs</h1>
              <img src=".\src\assets\Images\airconditionrepair.jpg"  />
              <button className="quotebutton " onClick={goToContact}>Get Quote</button>
      </div>
      <div className="image-slider">
      <h2 className="header">Airconditioner Installations</h2>
              <img src="./src/assets/Images/airconinstall.png"  />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
      <div className="image-slider">
      <h2 className="header">Elevator Installations</h2>


              <img src=".\src\assets\Images\elevator2.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
      <div className="image-slider">
      <h2 className="header">Elevator Maintenance</h2>

              <img src=".\src\assets\Images\Elevators1.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
      <div className="image-slider">
      <h2 className="header">Maintenance of Refrigerators</h2>

              <img src=".\src\assets\Images\fridgerepair.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
      
      <div className="image-slider">
      <h2 className="header">Electrical Works</h2>

              <img src=".\src\assets\Images\tools1.jpg" />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
      <div className="image-slider">
      <h2 className="header">Generator Repairs</h2>

              <img src=".\src\assets\Images\tools1.jpg" />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
      <div className="image-slider">
      <h2 className="header">Paint Work</h2>

              <img src=".\src\assets\Images\tools1.jpg" />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
     
      
    </Slider>
  );
}