import { Link } from "react-router-dom";
const Header = () =>{
  return(
   <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://template.canva.com/EAGXsRURT9o/1/0/400w-Wm4zz11nsgs.jpg" alt="" />
      </div>
      <div className="nav-item">
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
          <li>Cart</li>
        </ul>
      </div>
   </div>
  )
}
export default Header;