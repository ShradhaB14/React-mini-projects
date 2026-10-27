import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type UserLoginForm = {
  email: string,
  password: string
} 

    const Login =()=>{
      const navigate = useNavigate()
      const [loginInfo, setLoginInfo] = useState<UserLoginForm>({
        email: '',
        password: ''
      })
      const [users, setUsers] = useState<UserLoginForm[]>([])

    useEffect(()=>{
      console.log(users)
       localStorage.setItem('email',users[0]?.email);
    },[users])

    const handleSubmit = () => {
      const newArr = [...users, loginInfo];
      console.log(loginInfo, newArr, users)
      setUsers(newArr)
      navigate('/')
    };


 return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      {/* Card */}
      <div className="bg-white p-8 rounded-2xl shadow-md w-[350px] space-y-5">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e)=>setLoginInfo({...loginInfo, email: e.target.value})}
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e)=>setLoginInfo({ ...loginInfo, password:e.target.value })}
          />
        </div>

        {/* Button */}
        
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition" onClick={handleSubmit}>
          Login
        </button>
        

        {/* Footer */}
        <p className="text-xs text-center text-gray-500">
          Don’t have an account? <span className="text-orange-500 cursor-pointer">Sign up</span>
        </p>

      </div>
    </div>
  );

}
export default Login;