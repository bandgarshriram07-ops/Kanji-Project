import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/kanjiService'
const Login = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [userData, setUserData] = useState({
        email : "",
        password : ""
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await login(userData);
        console.log(res);
        if(res.ok){
            setSuccess("User logged in successfully");
            setError("");
            console.log(res.data);
            localStorage.setItem("token", res.data.Token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setTimeout(() => {
            navigate("/kanji");
            }, 2000);
        }else{
            setError("Invalid email or password");
            setSuccess("");
        }
        console.log(res);
        setUserData({
            email : "",
            password : ""
        });
    };
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
         bg-sky-100 hover:bg-sky-200" onSubmit={loginUser}>
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