// components/HomePage.j
import HomeSlider from "../../components/slider/HomeSlider";
import CustomButton from "../../components/customButton/CustomButton";
import { useNavigate, Link } from "react-router-dom";
import "./Home.scss";
import TestimonialSlider from "../../components/slider/TestimonialSlider";




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
      <div style={{width: "100%", padding: "0 15px", borderRadius: "5px" }}>
      <HomeSlider />


      </div>
     
    

      {/* About Section */}
      <div className="about-section">
          <div className="about-featured jumbotron my-5 container-fluid ">
            <h2 className="text-start">Your Requirement is Our Service </h2>
            <p className="lead text-bold"> Are you the representative of multinational company, or a government agency, a technical rep of a company? No matter what you do, you can take advantage of our services at <span style={{color:"blue", fontWeight: "bold"}}>Tech</span><span style={{color:"green", fontWeight:"bold"}}>Par </span>.
                  
            </p>
            <p className="lead text-bold"> To take your business struggling position, average position, or wherever you are
               right now to where you have dreamed of, our services will come in handy. Whatever the challenges you may be facing, 
               the bottle necks you want to fix, just bring us in. We shall take your company from where you are to where you have desired.
               
                  
            </p>
            <p className="lead text-bold"> You can simply do that by browsing though the <span style={{color:"blue", fontWeight: "bold"}}>Tech</span><span style={{color:"green", fontWeight:"bold"}}>Par </span>.
              website and finding a service you need.    
                  </p>
            
            
            
            <p className="lead text-end">
              <CustomButton calltoaction={"More about us"} onClick={() => navigate("/about")}/>
            </p>
        </div>

        <div className="team1-pics">
          {/* <img src="./assets/Images/reception.jpeg" alt="T-time global team members at work" /> */}

          <video width="100%" height="" style={{borderRadius: "10px"}} controls>
                        <source src="/assets/video/advideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
        </div>


      </div>



      {/* Core Values */}
      <div className="value-section">
      <div className="team2-pics">
          <img src="https://innov8tiv.com/wp-content/uploads/2017/05/Aiivon-123.jpg" alt="T-time global team member at work" />
        
            

        </div>
      <div className="value-featured">
        <h3 className="text-center mb-4">About <span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span></h3>
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
      Our goal is to help every business out their to scale, grow, and achieve objectives through our strategic services.
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
      <span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span> seeks to be one of the top tech service provisioning companies in the world
      
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
      <p style={{textAlign: "left"}}> <span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span>: Mission is to be a:</p>
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
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#valueTwo" aria-expanded="false" aria-controls="valueTwo">
        Value
      </button>
    </h2>
    <div id="valueTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span>:  We are zero excuses company with an experience and qualify personnel put together for Timely Solution and services.


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
      We are into service rendering such as <Link to="/services/web%20development" style={{color: ""}}>Web Development</Link>, <Link to="/services/Data%20Analytics" style={{color: ""}}>Data Analytics</Link>, <Link to="/services/graphics-design" style={{color: ""}}>Graphics Design</Link>, <Link to="/services/vsat" style={{color: ""}}>Vsat and fast internet services</Link>, and <Link to="/services/web-hosting" style={{color: "green"}}>Web Hosting</Link>. We are also into Consultancy.


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
            <p className="card-text">Every installation is a masterpiece. We strive for excellence in every aspect of our <Link to={"/services"} style={{color: ""}}>services</Link>.</p>
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
      Ready to experience the <Link to="/portfolio"><span style={{color:"blue", fontWeight: "bold"}}>Tech</span><span style={{color:"green"}}>Star</span> difference</Link>? 💡 <strong onClick={()=> navigate("/contact")} style={{cursor:"pointer"}}>Contact us today!</strong>
    </p>
  </section>

  <section className="testimonials-section mt-4 mb-4 ">
      <div className="container bb-light">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
       
        <TestimonialSlider />
      </div>
    </section>

      

    <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
    </div>
  );
}


