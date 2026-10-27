import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user)
  const handleSignOut =()=>{  
    dispatch(removeUser())

    signOut(auth)
      .then(() => {
         navigate('/')
        // Sign-out successful.
      })
      .catch(() => {
        // An error happened.
      });

   
  }
  return (
    <div className="fixed top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/8f8cd6db-ed43-48b6-abb4-46f7e59a4f14/eec19c4f-6494-4d77-a1ad-4ab4f171e152/f16ddec9-7972-451b-a2bd-a46aa89a60d3/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-40 "
      />
      {user && <button className="bg-red-600 text-white px-3 h-8 rounded cursor-pointer self-center" onClick={handleSignOut}>Signout</button>}
    </div>
  );
};
export default Header;
