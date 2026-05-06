import {useState, useContext,createContext,useEffect} from 'react'

const AuthContext = createContext();

export  const AuthProvider = ({children}) => {  

  const [user, setUser] = useState(null);

   useEffect(() => {
    const getUserData = async () => {
      
     try{
      const res = await fetch("https://kanji-project-d8kv.vercel.app/api/me",{
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