import { useNavigate} from "react-router-dom";
import "./NotFound.scss"

export default function NotFound() {
    const navigate = useNavigate()

function goToHome(){
  navigate("/")
}



    return (
       
        <div className="container text-center h-100"  style={{height: "100vh"}}>
                 <h1>Oops! 404! That Page requested not found.</h1>
                 <p onClick={goToHome} role="button">Go to Home: </p>

            </div>
 

    )
    }