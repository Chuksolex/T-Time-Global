import { useParams } from 'react-router-dom';
import { servicesData } from '../../assets/data/servicesdata';



const ServiceDetail = () => {
  // Extract serviceId from the URL params
  const { serviceId } = useParams();
  

  // Find the service with the matching ID
  const service = servicesData.find(service => service.id === (serviceId));
  console.log(service, "service at details");

  // If service not found, display a message
  if (!service) {
    return <p>Service not found</p>;
  }

  // Display service details
  return (
    <div className='container'>
      <div className=" mb-4">
      {/* <img
          src={service.imgSrc}
          alt={service.title}
          style={{ maxHeight: '200px', objectFit: 'cover' }}
        /> */}
      </div>
      <div>
        {/* Display service title */}
        <h2>{service.title}</h2>
        {/* Display service description paragraphs */}
        <p>
          {service.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </p>
      </div>
      {/* Additional details can be added here */}
    </div>
  );
};

export default ServiceDetail;
