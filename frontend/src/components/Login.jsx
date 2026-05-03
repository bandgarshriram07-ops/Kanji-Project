import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { login}  from '../services/kanjiService'
import { useAuth } from '../context/AuthContext'
const Login = () => {
    const navigate = useNavigate();
    const {login : setAuthUser} = useAuth();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
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
       if(result.ok){
           setAuthUser(result.data);
           setSuccess("Login Successful");
           navigate("/kanji");
       }else{
           setError("Invalid Credentials");
       }
    }
    
   const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div className="flex flex-col items-center justify-center gap-4 min-h-screen bg-[#f2d492]">
            {success && <div className="text-green-800 font-bold text-xl">{success}</div>}
            {error && <div className="text-red-500 font-bold text-xl">{error}</div>}
            <h1>Login</h1>
            <form className="flex flex-col items-center justify-center gap-4
             bg-white p-8 rounded-md shadow-md w-[50%] mx-auto rounded-xl  
             bg-sky-100 hover:bg-sky-200" onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="flex items-center justify-center gap-2 w-full">
                <label htmlFor="email">Email : </label>
                <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center gap-2 w-full">
                <label htmlFor="password">Password : </label>
                <input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}


export default Login