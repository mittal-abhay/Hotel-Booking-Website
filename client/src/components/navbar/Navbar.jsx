import "./navbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState,useEffect } from "react";

const Navbar = () => {
  const {user} = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY|| document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  
  })

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navContainer">
        <Link to="/" style={{ color:"inherit", textDecoration:"none"}}>
        <span className="logo">HotelBooking</span>
        </Link>
      
      {user? user.username:<div className="navItems">
        <button className="navButton">Register</button>
        <button className="navButton"><a href = "/login">Login</a></button>
      </div>}
      </div>
    </div>
  )
}

export default Navbar