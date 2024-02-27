// ServicesPage.js

import { portfolioData } from '../../components/data/portfoliodata.js';
import { porfolioWorkInProgress } from '../../components/data/portfolio-work-in-progress.js';



const Portfolio = () => {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }
  
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      ...portfolioData.map(project => ({
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "image": project.imgSrc // Add image URL here
      })),
      ...porfolioWorkInProgress.map(project => ({
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "image": project.imgSrc // Add image URL here
      }))
    ]
  };

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row">
        {portfolioData.map(singlePortfolio => (
          <div key={singlePortfolio.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={singlePortfolio.imgSrc}
                className="card-img-top"
                alt={singlePortfolio.title}
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{singlePortfolio.title}</h5>
                <p className="card-text">{truncateText(singlePortfolio.description, 100)}</p>
               
               
              </div>
            </div>
          </div>
        ))}
      </div>


      <h2 className="text-center mb-4">Work In Progress</h2>
      <div className="row">
        {porfolioWorkInProgress.map(single => (
          <div key={single.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={single.imgSrc}
                className="card-img-top"
                alt={single.title}
                style={{ maxHeight: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{single.title}</h5>
                <p className="card-text">{truncateText(single.description, 150)}</p>
               
               
              </div>
            </div>
          </div>
        ))}
      </div>
      <script type="application/ld+json">{JSON.stringify(portfolioSchema)}</script>

    </div>
  );
};


export default Portfolio;
