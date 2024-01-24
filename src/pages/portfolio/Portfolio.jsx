// ServicesPage.js

import { portfolioData } from '../../components/data/portfoliodata.js';



const Portfolio = () => {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }
  

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
                <p className="card-text">{truncateText(singlePortfolio.description, 70)}</p>
               
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Portfolio;
