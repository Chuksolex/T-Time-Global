// components/HomePage.j
import HomeSlider from "../../components/slider/HomeSlider";
import CustomButton from "../../components/customButton/CustomButton";
import { useNavigate, Link } from "react-router-dom";
import "./Home.scss";
import { testimonialData } from "../../components/data/testimonialdata.js";




//import jumbotronFullWidth from "../../components/jumbotronFullWidth/JumbotronFullWith";
export default function HomePage () {
  const navigate = useNavigate();

  const businessDescription = "Technical Solution Company set up to provide and render a working solution to different Establishment, with efficient installation or repair of refrigerators, electrical works, generators, lifts, painting services, etc..";

  const teamPictureUrl =  "/public/assets/Images/reception.png";

  // Create JSON-LD schema for the home page
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "T-Time Nigeria Global",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "46 Housing Estate Uyo. Akwa Ibom State. Nigeria",
      "addressLocality": "Uyo",
      "addressRegion": "Akwa Ibom",
      "postalCode": "520231",
      "addressCountry": "Nigeria"
    },
    "telephone": " 08022458238",
    "url": "https://t-timenigeriaglobal.com.ng",
    "description": businessDescription,
    "image": teamPictureUrl
  };

  return (
    <div>

      <HomeSlider />
     
    

      {/* About Section */}
      <div className="about-section">
          <div className="about-featured jumbotron my-5 container-fluid">
            <h3 className="display-4">Our Story </h3>
            <p className="lead "> <span style={{color:"red"}}>T-Time</span> <span style={{color:"green"}}>Nigeria Global </span> : is a Technical Solution Company set up to provide 
                and render a working solution to different Establishment, Organization, Company and industry.
                 For every success is a matter of time and we are Time so we are very optimistic with our 
                 potential. To avoid mistakes, errors, delays, and excuses from individual workers, even 
                 extra  expenses, then <span style={{color:"red"}}>T-Time</span> <span style={{color:"green"}}>Nigeria Global </span> is here to excuse any excuses in delivering quality, timely and excellent work. Every project has its challenges, so we target it on time. Our team of Engineers and Technicians are reliable and ready for the work from the starting to completion, and operation.  
            </p>
            
            
            
            <p className="lead">
              <CustomButton calltoaction={"More about us"} onClick={() => navigate("/about")}/>
            </p>
        </div>

        <div className="team1-pics">
          <img src="./assets/Images/reception.png" alt="T-time global team member at work" />

        </div>


      </div>



      {/* Core Values */}
      <div className="value-section">
      <div className="team2-pics">
          <img src="./assets/Images/fieldsupervisor.jpg" alt="T-time global team member at work" />
        
            

        </div>
      <div className="value-featured">
        <h3 className="text-center mb-4">Company Ethos</h3>
      <div className="accordion p-4 w-80 mx-auto" id="accordionExample">
      

  {/* adding */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#goalTwo" aria-expanded="false" aria-controls="goalTwo">
      Goal
      </button>
    </h2>
    <div id="goalTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      Our goal is to contribute to the success of every of our client to meet their target. Every contract carried out by T-Time we shoulder the responsibility and give out the timely completion.
    </div>
    </div>
  </div>
  



  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Vision
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <span style={{color:"red"}}>T-Time</span> <span style={{color:"green"}}>Nigeria Global </span> our aim is given the best perfectly, reducing the cost and maintaining the standard.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#missionThree" aria-expanded="false" aria-controls="missionThree">
        Mission
      </button>
    </h2>
    <div id="missionThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p style={{textAlign: "left"}}> <span style={{color:"red"}}>T-Time</span> <span style={{color:"green"}}>Nigeria Global </span>: Mission is to be a:</p>
        <p style={{textAlign: "left"}}>‥Solution in your Company </p>
        <p style={{textAlign: "left"}}>‥Success in your establishment</p>
        <p style={{textAlign: "left"}}>‥Standard in your services</p>
        <p style={{textAlign: "left"}}>‥Adding value in your industry.</p>
         
      </div>
    </div>
    
  </div>

  {/* adding */}
<div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#purposeTwo" aria-expanded="false" aria-controls="purposeTwo">
      Purpose
      </button>
    </h2>
    <div id="purposeTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <span style={{color:"red"}}>T-Time</span> <span style={{color:"green"}}>Nigeria Global </span>: we are answerable to technical works with better finishing, making it perfect, also putting it in place for better services.
    </div>
    </div>
  </div>
  
  



  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#valueTwo" aria-expanded="false" aria-controls="valueTwo">
        Value
      </button>
    </h2>
    <div id="valueTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <span style={{color:"red"}}>T-Time</span> <span style={{color:"green"}}>Nigeria Global </span>:  We are zero excuses company with an experience and qualify personnel put together for Timely Solution and quality works.


      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#whatTwo" aria-expanded="false" aria-controls="whatTwo">
        What We Do
      </button>
    </h2>
    <div id="whatTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      We are into industrial and domestic <Link to="/services/electrical-installation" style={{color: "green"}}>Electrical-wiring</Link>, installation of Elevator (Lift), <Link to="/services/air-conditioning-system" style={{color: "green"}}>Air Conditioner (Ac)</Link>, with maintenance, we carry out repairs & services of <Link to="/services/refrigerator-maintenace" style={{color: "green"}}>Refrigerator (Fridge)</Link>, <Link to="/services/generator-maintenance" style={{color: "green"}}>Generator</Link>, and <Link to="/services/painting-services" style={{color: "green"}}>Painting works</Link>. We are also into Consultancy.


      </div>
    </div>
  </div>
  <p className="mt-4">
              <CustomButton calltoaction={"Hire Us"} onClick={() => navigate("/contact")}/>
  </p>
</div>

      </div>
          

        


      </div>

      
  <section className="bg-light p-4 mt-5 chooseus">
    <h2 className="text-center mb-4">Why Choose Us?</h2>

    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Excellence</h5>
            <p className="card-text">Every installation is a masterpiece. We strive for excellence in every aspect of our <Link to={"/services"} style={{color: "green"}}>services</Link>.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reliability</h5>
            <p className="card-text">Maintenance services that stand the test of time. You can rely on us for consistent and trustworthy solutions.</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Innovation</h5>
            <p className="card-text">Elevate your expectations with unparalleled solutions. We embrace innovation to meet your unique needs.</p>
          </div>
        </div>
      </div>
    </div>

    <p className="text-center mt-4">
      Ready to experience the <Link to="/portfolio"><span style={{color:"red"}}>T-Time</span> <span style={{color:"green"}}>Nigeria Global </span> difference</Link>? 💡 <strong onClick={()=> navigate("/contact")} style={{cursor:"pointer"}}>Contact us today!</strong>
    </p>
  </section>

  <section className="testimonials-section mt-4 mb-4">
      <div className="container">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div className="row">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div className="testimonial-card">
                <p className="testimonial-message">{testimonial.message}</p>
                <div className="testimonial-author">
                  <p className="author-name fw-bold">{testimonial.name}</p>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      

    <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
    </div>
  );
}


