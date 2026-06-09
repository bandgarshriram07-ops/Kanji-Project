import {useState, useContext,createContext,useEffect} from 'react'

const AuthContext = createContext();

export  const AuthProvider = ({children}) => {  

  const [user, setUser] = useState(null);

   useEffect(() => {
    const getUserData = async () => {
      const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";
     try{
      const res = await fetch(`${API_BASE}/api/me`,{
        method : "GET",
        credentials : "include"
      });
      const data = await res.json();
      setUser(data.user);
      }catch(err){
        setUser(null);
      };
     }
     getUserData();
  },[]);

  const Login = (userData) => setUser(userData);
  const Logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{user,Login,Logout}}>
      {children}
    </AuthContext.Provider>
  )
};


export const useAuth = () => useContext(AuthContext);