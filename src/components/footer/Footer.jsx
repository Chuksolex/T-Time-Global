import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {

 


  return (
    <div className='footer bg-light'>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className=" p-2">
        {/* <!-- Footer --> */}
        <footer
          className="text-center text-lg-start text-dark"
          
        >
          
         
          <div
            className="text-center p-3 fs-6 bg-#000"
            
          >
            <span className="fw-1 fs-6 ">© 2024 Copyright: </span>
            <Link className="text-success fw-1 fs-6" to="/http://localhost:5173"
            > <span className="fs-6"><span style={{color:"blue", fontWeight: "500", fontSize:"14px"}}>Tech</span><span style={{color:"green", fontWeight: "500", fontSize:"14px"}}>Par </span></span></Link>
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
















