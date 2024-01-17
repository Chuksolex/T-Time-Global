import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to={"/"}>
        <img src={"./src/assets/images/logo1.png"}  
                     width="140" height="140" 
                     alt="T-Time-Nigeria-Global Logo" /> 
                
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/about"}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/services"}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/contact"}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/portfolio"}>
                Portfolio
              </Link>
            </li>
            
          </ul>
          <form className="d-flex">
          
            <button className="btn btn-outline-success" type="submit" onClick={() => navigate("/contact")}>
              Work With Us.
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
