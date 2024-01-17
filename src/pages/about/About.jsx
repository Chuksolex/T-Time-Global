import "./About.scss";



function About() {




  
  return (
    <div className="about container">
        <div className="accordion accordion-flush my-4" id="accordionFlushExample">
        <div className="accordion-item">
    <h1 className="accordion-header">
      <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         About Us
      </button>
    </h1>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      T-Time Nigeria Global is a technical company registered under the CAC with registration number RC 7247098, located at Plot 46 Federal Housing Estate. Uyo. Akwa Ibom State Nigeria. It specializes in the installation and maintenance of Lifts (elevators), Air-conditioners A.C., Refrigerators, Generators, Electrical Wiring including House painting.
      </div>
    </div>
  </div>
        
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

    </div>

    <div>
      <img src=".\src\assets\Images\house.jpg" width={"100%"} height={"400"}></img>
    </div>

    (
    <div>
      <h2>Welcome to T-Time Nigeria Global!</h2>

      <p>
        At T-Time Nigeria Global, we pride ourselves on being a leading force in the field
        of comprehensive electrical installations, elevating your experiences, and maintaining
        the heartbeat of your spaces. With a commitment to excellence and a passion for
        precision, we bring forth a wealth of expertise in electrical installations, lift
        and elevator solutions, electrical equipment deployment, air conditioning systems,
        and meticulous maintenance services.
      </p>

      <h3>Our Core Services:</h3>

      <ol>
        <li>
          <strong>Electrical Installations:</strong> Our skilled technicians specialize
          in delivering top-notch electrical installations that cater to both residential
          and commercial needs. From wiring solutions to power distribution systems, we ensure
          your space is powered with reliability and safety.
        </li>

        {/* Add similar list items for other core services */}
      </ol>

      <h3>Additional Services:</h3>

      <ul>
        <li>
          <strong>Painting and Related Works:</strong> Enhance the aesthetic appeal of your
          spaces with our comprehensive painting and related services. From surface preparation
          to finishing touches, our skilled craftsmen bring creativity and precision to every project.
        </li>

        {/* Add similar list items for other additional services */}
      </ul>

      <p>
        At T-Time Nigeria Global, we envision a world where every space is a testament to
        efficiency, safety, and aesthetic brilliance. Our team is dedicated to turning your
        electrical and structural aspirations into reality, delivering solutions that stand
        the test of time.
      </p>

      <p>
        Experience excellence, reliability, and innovation with T-Time Nigeria Global -
        where every installation is a masterpiece and every maintenance service is a commitment
        to your satisfaction.
      </p>

      <p>
        Elevate your expectations; choose T-Time Nigeria Global for unparalleled electrical solutions.
      </p>
    </div>
    
    </div>
  );
}

export default About;

