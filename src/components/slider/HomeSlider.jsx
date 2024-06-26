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
       
    infinite: true,
    //speed: 500,
    slidesToShow: 1,
    //slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    
    //variableWidth: true,
    adaptiveHeight: true,
    adaptiveWidth: true
  };
  return (
    <Slider {...settings}>
        <div className="image-slider">
      <h2 className="header">Web Development Services:</h2>

              <img src="/assets/Images/code3.jpg" />
              <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>      
     
   
      <div className="image-slider">
      <h2 className="header">Data Analytics Services:</h2>


              <img src="/assets/Images/hosting2.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      {/* <div className="image-slider">
      <h2 className="header">Elevator Maintenance</h2>

              <img src="/assets/Images/Elevators1.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div> */}
      <div className="image-slider">
      <h2 className="header">Geographic Imagery Services GIS:</h2>

              <img src="/assets/Images/gis1.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      
      
      <div className="image-slider">
      <h2 className="header">Web Hosting Services:</h2>

              <img src="/assets/Images/hosting1.jpg" />
              <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      <div className="image-slider">
      <h2 className="header">Vsat Fast Internet Services:</h2>

              <img src="/assets/Images/tech2.jpg" />
              <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
     
      
    </Slider>
  );
}