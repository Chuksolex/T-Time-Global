import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../components/data/servicesdata.js';

// Function to replace "TechPar" with styled HTML
const styleTechPar = (text) => {
  return text.replace(/TechPar/g, 
    '<span style="color: blue; font-weight: 500;">Tech</span><span style="color: green; font-weight: 500;">Par</span>');
};

// Function to truncate text
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

// Process description by truncating and styling "TechPar"
const processDescription = (text, maxLength) => {
  const truncatedText = truncateText(text, maxLength);
  return styleTechPar(truncatedText);
};

const Services = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": servicesData.map(service => ({
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "url": `https://t-timenigeriaglobal.com.ng/services/${service.id}`
    }))
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {servicesData.map(service => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={service.imgSrc}
                className="card-img-top"
                alt={service.title}
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: processDescription(service.description, 190) }} />
                <Link to={`/services/${service.id}`} className="btn btn-primary w-100">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
    </div>
  );
};

export default Services;
