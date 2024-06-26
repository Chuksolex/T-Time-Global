import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
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
        <img src="/assets/Images/techparlogo.jpg" 
                     width="140" height="140" 
                     alt="T-Time-Nigeria-Global Logo" /> 
                
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/about"}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/services"}>
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/contact"}>
                CONTACT US
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to={"/#"} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PORTFOLIO
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/#">GENERAL WORK PORTFOLIO</Link>
                <Link className="dropdown-item" disabled to={"#"}>OFFICE & BUSINESS BUILDINGS</Link>
                <Link className="dropdown-item" to={"#"}>HOTELS</Link>
                <Link className="dropdown-item" to={"#"}>COMMERCIAL & ENTERTAINMENT CENTERS</Link>
                <Link className="dropdown-item" to={"#"}>HOSPITALS</Link>
                <Link className="dropdown-item" to={"#"}>OTHER PROJECTS</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"#"}>
                CLIENTS & PARTNERS
              </Link>
            </li>
            
          </ul>
          
            <button className="btn btn-success btn-outline-primary" type="submit" onClick={() => navigate("/contact")}>
              <div className="reqquote">
                <span className="text-white text-bold">Request A Quote</span>
                <div className="team">
                  <img src="/assets/Images/team1.png" alt="team member 1" />
                  <img src="/assets/Images/team2.png" alt="team member 2" />
                  <img src="/assets/Images/team3.png" alt="team member 3" />
                </div>
                
              </div>
            </button>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
