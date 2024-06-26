import "./About.scss";
import { teamData } from "../../components/data/teamdata";
import { Link } from "react-router-dom";

function About() {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }

  const businessDescription = "Technical company registered under the CAC (RC 7247098), located at 46 Fed. Housing Uyo. Nigeria. Specializes in the installation and maintenance of Lifts (elevators), Air-conditioners A.C., Refrigerators, Generators, Electrical Wiring including House painting, and Consultancy.";

  

  // Create JSON-LD schema for the home page
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "About T-Time Nigeria Global",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "46 Housing Estate Uyo. Akwa Ibom State. Nigeria",
      "addressLocality": "Uyo",
      "addressRegion": "Akwa Ibom",
      "postalCode": "520231",
      "addressCountry": "Nigeria"
    },
    "telephone": " 08022458238",
    "url": "https://t-timenigeriaglobal.com.ng/about",
    "description": businessDescription,
    
  };

  return (
    <div className="about container">
      <div className="accordion w-75 mx-auto my-4" id="accordionFlushExample">
       

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboutTwo" aria-expanded="false" aria-controls="aboutTwo">
            About Us
            </button>
          </h2>
          <div id="aboutTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <Link to="/"><span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span></Link>is a Technology Company registered under the CAC with registration number RC 7247098..., located at Plot 46.......Abuja. Nigeria. We have specialty ins Web Design, Development, Web Hosting, Vsat or Internet Provisioning, GIs and <Link to="/contact" style={{color: ""}}>Consultancy</Link>.
            </div>
          </div>
        </div>
       
        {/* adding stuff here */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVisionTwo" aria-expanded="false" aria-controls="collapseVisionTwo">
            Philosophy
            </button>
          </h2>
          <div id="collapseVisionTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            At <Link to="/"><span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span></Link>, we prioritize our client's needs.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVision" aria-expanded="false" aria-controls="collapseVision">
              Vision
            </button>
          </h2>
          <div id="collapseVision" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            <Link to="/">At <span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span></Link> we aim to be the one of the best tech servicing company in the world.
            </div>
          </div>
        </div>
        

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAnchorPoint" aria-expanded="false" aria-controls="collapseAnchorPoint">
              Anchor Point
            </button>
          </h2>
          <div id="collapseAnchorPoint" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Is to serve our clients with quality services designed to deliver the most advanced and cost-effective technological solutions in software, data analysis, web design, hosting, data provisioning, GIS and so on
              .
            </div>
          </div>
        </div>
      </div>

      <div className="about-message">
        <h2>Welcome to TechPar, your biggest go to place for tech services.</h2>

        <p className="">
          At <Link to="/"><span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span></Link>, we cover the 
          ecosystem of tech services and delivery with software development, web development, Data Analytics, 
          Geographic Information Systems GIS, Web Hosting, Vsat and High Speed Internet With a commitment to excellence and a passion for
          precision.<Link to="/services/air-conditioning-system" style={{color: ""}}>air conditioning systems (A.C.)</Link>, <Link to="/services/refrigerator-maintenace" style={{color: ""}}>refrigerator(fridge)</Link>, <Link to="/services/generator-maintenance" style={{color: ""}}>generator</Link>, and <Link to="/services/generator-maintenance" style={{color: ""}}>generator</Link>.
        </p>

        <p>
          At <Link to="/"><span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span></Link>, we envision a world where every space is a testament to
          efficiency, safety, and brilliant designs, and better solutions. Our team is dedicated to turning your
          tech ideas, and business desire into reality, <Link to="/portfolio" style={{color: "green"}}> by delivering solutions that stand
          the test of time.</Link>
        </p>

        <p className="">
          Experience excellence, reliability, and innovation with <span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span>
          where <Link to="/services" style={{color: ''}}>design, contract, or deal is a tale of dedication, excellence, and commitment to preserving a good name </Link> to 
          your satisfaction.
        </p>

        <p>
          Elevate your expectations; choose <span style={{color:"blue", fontWeight: "500"}}>Tech</span><span style={{color:"green", fontWeight: "500"}}>Par </span> and benefit from a team with years of credible experience.
        </p>
      </div>

      <h2 className="text-center mb-4 mt-4">Our Team Members</h2>
      <hr/>

      <div className="row mt-4">
        {teamData.map(single => (
          <div key={single.id} className="trapezium col-md-3 mb-4">
            <div className="d-flex flex-column align-items-center" style={{backgroundColor: "light-gray",clipPath: "polygon(25% 10%, 75% 0%, 100% 100%, 0% 100%)"}}>
              <img
                src={single.imgSrc}
                className="mb-2"
                alt={single.title}
                style={{ height: '200px', width: "200px", }}
              />
              <div className="text-center ">
                <h5 className="pb-0 mb-0">{single.title}</h5>
                <p className="pt-0 pb-4">{truncateText(single.description, 150)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr/>
      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <h5 className="c">Our Address</h5>
          <p className=""><i className="bi bi-geo-alt mx-2 fs-6" style={{color: "red"}}></i>46 Layout, Abuja. Nigeria</p>
        </div>
        <div className="col-md-4 mb-4">
          <h5 className="c">Call Sales:</h5>
          <p className=""><i className="bi bi-telephone mx-2 fs-6" style={{color: "red"}}></i><a href="tel:08022458238" >08022458.....</a></p>
        </div>
        <div className="col-md-4 mb-4">
          <h5 className="c">Email Us:</h5>
          <p className=""><i className="bi bi-envelope-check mx-2 fs-6" style={{color: "red"}}></i><a href="mailto:t.timenigeriaglobal@gmail.com">info@TechPar.tech</a></p>
        </div>
      </div>
      <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>

    </div>
  );
}

export default About;
