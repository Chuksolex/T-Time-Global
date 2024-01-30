// components/HomePage.j
import HomeSlider from "../../components/slider/HomeSlider";
import CustomButton from "../../components/customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { testimonialData } from "../../components/data/testimonialdata.js";




//import jumbotronFullWidth from "../../components/jumbotronFullWidth/JumbotronFullWith";
export default function HomePage () {
  const navigate = useNavigate();
  return (
    <div>

      <HomeSlider />
     
    

      {/* About Section */}
      <div className="about-section">
          <div className="about-featured jumbotron my-5 container-fluid">
            <h3 className="display-4">Our Story </h3>
            <p className="lead">STORY

            STORY T-Time Nigeria Global : is a Technical Solution Company set up to provide and render a working solution to different Establishment, Organization, Company and industry. To avoid mistakes, errors, delays, and excuses from individual workers, even extra expenses, then T-Time Nigeria Global is here to excuse any excuses in delivering quality, timely and excellent work. As a Technical Solution Company our team of Engineering and Technicians is reliable and ready for the work from the starting to completion, and operation.  
</p>
            
            
            
            <p className="lead">
              <CustomButton calltoaction={"More about us"} onClick={() => navigate("/about")}/>
            </p>
        </div>

        <div className="team1-pics">
          <img src="./assets/Images/team2.jpg" alt="T-time global team member at work" />

        </div>


      </div>



      {/* Core Values */}
      <div className="value-section">
      <div className="team2-pics">
          <img src="./assets/Images/team1.jpg" alt="T-time global team member at work" />
        
            

        </div>
      <div className="value-featured">
        <h3 className="text-center mb-4">Company Ethos</h3>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Goal
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Our goal is to contribute to the success of every of our client to meet their target. 

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
      T-Time Nigeria Global our aim is given the best perfectly, reducing the cost and maintaining the standard.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Mission
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p style={{textAlign: "left"}}> T-Time Nigeria Global: Mission is to be a:</p>
      <ol style={{textAlign: "left"}}>
        <li>Solution in your Company</li>
        <li>Success in your establishment</li>
        <li>Standard in your services</li>
        <li>	Adding value in your industry.</li>
      </ol>	
      </div>
    </div>
    
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Purpose
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      T-Time Nigeria Global: we are answerable to technical works with better finishing, making it perfect, also putting it in place for better services.
 

      </div>
    </div>
    
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Value
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      T-Time Nigeria Global:  A Technical Solution Company with an experience and qualify personnel put together for Timely Solution and quality works.


      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What We Do
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      We are into industrial and domestic Electrical wiring, installation of Elevator (Lift), Air Conditioner (Ac), with maintenance, we carry out repairs & services of Refrigerator (Fridge), Generator, and Painting works. We are also into Consultancy.


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
            <p className="card-text">Every installation is a masterpiece. We strive for excellence in every aspect of our services.</p>
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
      Ready to experience the T-Time difference? 💡 <strong onClick={()=> navigate("/contact")} style={{cursor:"pointer"}}>Contact us today!</strong>
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

      

     
    </div>
  );
};


