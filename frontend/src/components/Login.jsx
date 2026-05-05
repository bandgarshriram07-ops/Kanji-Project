import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { login}  from '../services/kanjiService'
import { useAuth } from '../context/AuthContext'
const Login = () => {
    const navigate = useNavigate();
    const {Login : setAuthUser} = useAuth();
    const [userData, setUserData] = useState({
        email : "",
        password : ""
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        if(userData.email === "" || userData.password === ""){
            setError("Please fill all the fields");
            return;
        }
       let result = await login(userData.email,userData.password);
       if(result && result.ok){
           setAuthUser(result.data.user);
              alert("Login Successful");
               navigate("/");
       }else{
           alert("Invalid Credentials");
       }
    }
    
   const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div className="flex flex-col items-center   min-h-screen  w-screen">
            <form className="flex flex-col items-center px-8 rounded-md shadow-md
            bg-gray-700  max-w-sm  rounded-xl  
                h-[20rem] mt-12" onSubmit={handleLogin}>
            <h2 className='text-3xl font-bold text-center text-white'>Login</h2>
            <div className=" w-full px-4 ">
                <label className='block font-medium text-gray-700 mt-4 text-white' htmlFor="email">Email </label>
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
                className='mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500  border-none'
              />
            </div>
            <div className=" w-full ">
                <label className='block font-medium text-gray-700 mt-4 text-white' htmlFor="password">Password </label>
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
                className='mt-2 px-2  py-2 rounded-md w-full focus:outline-none shadow-lg focus:ring-2
                 focus:ring-blue-500 border-none'
              />
            </div>
            <button className='text-white bg-blue-500
            hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
             font-medium rounded-lg text-sm px-5 py-2.5 text-center border-none
             w-full mt-4' type="submit">Login</button>
        </form>
    </div>
  )
}


export default Login