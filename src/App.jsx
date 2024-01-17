
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import NotFound from './pages/notFound/NotFound.jsx';
import Home from './pages/home/Home';
import About from  "./pages/about/About.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Services from './pages/services/Services.jsx';
import ServiceDetail from './pages/services/ServiceDetailPage.jsx';
import Portfolio from './pages/portfolio/Portfolio.jsx';





function App() {
  
  const Layout = () => {
    return (
      <div className="app">
      
         <Navbar/>
         <Outlet/>
         <Footer/>    

     </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {path: "/", element: <Home />},
        {path: "/about", element: <About />},
        {path: "/contact", element: <Contact />},
        {path: "/services", element: <Services/>},
        {path: "/services/:serviceId", element: <ServiceDetail/>},
        {path: "/portfolio", element: <Portfolio/>},



        { path: "*", element: <NotFound />}





      ]
    }
  ]);

  return (
    <div>
       <RouterProvider router={router} />

 
    </div>
  )

 
}

export default App
