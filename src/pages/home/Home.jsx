// components/HomePage.j
import HomeSlider from "../../components/slider/HomeSlider";
import CustomButton from "../../components/customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { testimonialData } from "../../assets/data/testimonialdata";




//import jumbotronFullWidth from "../../components/jumbotronFullWidth/JumbotronFullWith";
export default function HomePage () {
  const navigate = useNavigate();
  return (
    <div>

      <HomeSlider />
     
    

      {/* About Section */}
      <div className="about-section">
          <div className="about-featured jumbotron my-5 container-fluid">
            <h3 className="display-4">Welcome to T-Time Nigeria Global </h3>
            <p className="lead">We are the leading electromechanical contractor in Nigeria providing high-quality (Mechanical, and Electrical) installation and maintenance solutions for various range of sectors, offices, and homes in the construction environment.</p>
            <p className="lead">Services include installations and maintenance of A.C units, Lifts, Refrigerators, Generators, wiring, and other related services like painting..</p>
            
            
            <p className="lead">
              <CustomButton calltoaction={"More about us"} onClick={() => navigate("/about")}/>
            </p>
        </div>

        <div className="team1-pics">
          <img src="./src/assets/Images/team2.jpg" alt="T-time global team member at work" />

        </div>


      </div>



      {/* Core Values */}
      <div className="value-section">
      <div className="team2-pics">
          <img src="./src/assets/Images/team1.jpg" alt="T-time global team member at work" />
        
            

        </div>
      <div className="value-featured">
        <h3 className="text-center mb-4">Company Ethos</h3>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Philosophy
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      At T-Time Nigeria Global, safety is paramount in our philosophy. We adhere to the highest safety protocols, both for our team and our clients. This commitment extends to our installation and maintenance services, where proactive and preventive measures are prioritized.
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
        <strong>Our vision </strong> is to be the most trusted, efficient and innovative electrical installation and maintenance company that ensures satisfaction of our clients and partners.
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
        <strong>Our mission </strong> is to serve our clients with a quality services designed to deliver the most advanced and cost effective electrical or mechanical installations, repair and related services in the industry. We are sure that our Clients have their interests company like to provide long-term and long lasting competive services.
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


