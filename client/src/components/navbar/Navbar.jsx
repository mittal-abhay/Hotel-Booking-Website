import "./navbar.css"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState,useEffect } from "react";
import base from "../../hooks/base";
const Navbar = () => {
  const {user,dispatch} = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log(1);
    base.get('/auth/logout')
      .then(() => {
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        <button className="navButton"><a href = "/register">Register</a></button>
        <button className="navButton"><a href = "/login">Login</a></button>
      </div>}
      <button className="navButton"onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
export default Navbar