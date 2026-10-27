import { NavLink, useNavigate } from "react-router-dom";

const Header =()=>{
  const navigate = useNavigate();
  
  const logout=()=>{
    localStorage.clear();
    navigate('/login')
  }
  
return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      
      {/* Logo */}
      <div className="text-xl font-bold">
        MyLogo
      </div>

      {/* Menu */}
      <ul className="flex gap-6">
        <li className="hover:text-gray-300 cursor-pointer" ><NavLink to="/" end>Home</NavLink></li>
        <li className="hover:text-gray-300 cursor-pointer"><NavLink to="/about">About</NavLink></li>
        <li className="hover:text-gray-300 cursor-pointer"><NavLink to="/login" onClick={logout}>Logout</NavLink></li>
      </ul>

    </nav>
  );

}

export default Header;