import "./About.scss";
import { teamData } from "../../components/data/teamdata";

function About() {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }

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
              T-Time Nigeria Global is a technical company registered under the CAC with registration number RC 7247098, located at Plot 46 Federal Housing Estate. Uyo. Akwa Ibom State Nigeria. It specializes in the installation and maintenance of Lifts (elevators), Air-conditioners A.C., Refrigerators, Generators, Electrical Wiring including House painting, and Consultancy.
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
            At T-Time Nigeria Global, safety is paramount in our philosophy. We adhere to the highest safety protocols, both for our team and our clients. This commitment extends to our installation and maintenance services, where proactive and preventive measures are prioritized.
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
              T-Time Nigeria Global our aim is given the best perfectly, reducing the cost and maintaining the standard.
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
              Is to serve our clients with quality services designed to deliver the most advanced and cost-effective electrical or mechanical installations, repair, and related services in the industry. We are sure that our Clients have their interests company like to provide long-term and long-lasting competitive services.
            </div>
          </div>
        </div>
      </div>

      <div className="about-message">
        <h2>Welcome to T-Time Nigeria Global!</h2>

        <p className="">
          At T-Time Nigeria Global, we are in the field
          of comprehensive electrical installations, elevating your experiences, and maintaining
          the heartbeat of your spaces. With a commitment to excellence and a passion for
          precision, we bring forth a wealth of expertise in electrical installations, elevator(lift), air conditioning systems (A.C.), refrigerator(fridge), generator, and painting works.
        </p>

        <p>
          At T-Time Nigeria Global, we envision a world where every space is a testament to
          efficiency, safety, and aesthetic brilliance. Our team is dedicated to turning your
          electrical and structural aspirations into reality, delivering solutions that stand
          the test of time.
        </p>

        <p className="">
          Experience excellence, reliability, and innovation with T-Time Nigeria Global -
          where every installation is a masterpiece and every maintenance service is a commitment
          to your satisfaction.
        </p>

        <p>
          Elevate your expectations; choose T-Time Nigeria Global for unparalleled electrical solutions.
        </p>
      </div>

      <h2 className="text-center mb-4 mt-4">Our Team Members</h2>
      <hr/>

      <div className="row mt-4">
        {teamData.map(single => (
          <div key={single.id} className="col-md-3 mb-4">
            <div className="d-flex flex-column align-items-center">
              <img
                src={single.imgSrc}
                className="mb-2"
                alt={single.title}
                style={{ height: '200px', width: "200px", objectFit: "fill", borderRadius: "100%" }}
              />
              <div className="text-center">
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
          <p className=""><i className="bi bi-geo-alt mx-2 fs-6" style={{color: "red"}}></i>46 Housing Estate Uyo. Akwa Ibom State. Nigeria</p>
        </div>
        <div className="col-md-4 mb-4">
          <h5 className="c">Call an Expert:</h5>
          <p className=""><i className="bi bi-telephone mx-2 fs-6" style={{color: "red"}}></i><a href="tel:08022458238" >08022458238</a></p>
        </div>
        <div className="col-md-4 mb-4">
          <h5 className="c">Email Us:</h5>
          <p className=""><i className="bi bi-envelope-check mx-2 fs-6" style={{color: "red"}}></i><a href="mailto:t.timenigeriaglobal@gmail.com">t.timenigeriaglobal@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;
