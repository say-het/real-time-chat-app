import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
const useLogout = ()=>{
    const [loading,setLoaidng] = useState(false);
    const {setAuthUser} = useAuthContext();
    const logout = async ()=>{
        setLoaidng(true);
        try {
            const res = await fetch("/api/auth/logout" ,{
                method:"POST",
                headers:{"Content-Type":"application/json"}
            })
            const data = await res.json();
            console.log(data)
            if(data.error){
                
                throw new Error(data.error)
            }
            localStorage.removeItem("chat-user")
            setAuthUser(null)
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
        setLoaidng(false);
    }
    return {loading,logout};

}

export default useLogout;