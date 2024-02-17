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
    adaptiveHeight: true
  };
  return (
    <Slider {...settings}>
        <div className="image-slider">
      <h2 className="header">Electrical Works</h2>

              <img src="/assets/Images/tools1.jpg" />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>      
     
      {/* <div className="image-slider">
      <h2 className="header">Aircondition Installations & Repairs</h2>
              <img src="/assets/Images/menup.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div> */}
      <div className="image-slider">
      <h2 className="header">Air-conditioner Installations</h2>


              <img src="/assets/Images/aircond.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
      {/* <div className="image-slider">
      <h2 className="header">Elevator Maintenance</h2>

              <img src="/assets/Images/Elevators1.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div> */}
      <div className="image-slider">
      <h2 className="header">Refrigerators Repairs</h2>

              <img src="/assets/Images/fridgerepair.jpg"  />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
      
      
      <div className="image-slider">
      <h2 className="header">Generator Repairs & Servicing</h2>

              <img src="/assets/Images/lister1.jpg" />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
      <div className="image-slider">
      <h2 className="header">Painting Works</h2>

              <img src="/assets/Images/paint.jpg" />
              <button className="quotebutton" onClick={goToContact}>Get Quote</button>
      </div>
     
      
    </Slider>
  );
}