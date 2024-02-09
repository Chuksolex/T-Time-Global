import "./Footer.scss";
//import { Cart4, Cart3, Trash, Heart, Plus, Dash } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
//const navigate = useNavigate();

 


  return (
    <div className='footer bg-light'>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className=" p-2">
        {/* <!-- Footer --> */}
        <footer
          className="text-center text-lg-start text-dark"
          
        >
          
         
          <div
            className="text-center p-3 fs-6 "
            
          >
            <span className="fw-1 fs-6">© 2024 Copyright: </span>
            <Link className="text-success fw-1 fs-6" to="/http://localhost:5173"
            > <span className="fs-6"><span className="text-danger fs-6">T-time</span>nigeriaglobal.com.ng</span></Link>
          </div>

          <div  className="text-center p-3"><span className="fw-6 fs-6">Web-developer: </span>
            <Link to="https://ng.linkedin.com/in/chukwuma-oleka" target="_blank"
            > <span className="text-success fw-6 fs-6" >Chuk.O.</span></Link>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of .container --> */}









    </div>
  )
}

export default Footer
















