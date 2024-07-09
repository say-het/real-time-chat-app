import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import Login from "../pages/Login/Login";
import toast from "react-hot-toast";

const useLogin = ()=>{
    const [loading,setLoaidng] = useState();
const {setAuthUser} = useAuthContext();
    const login = async (username,password) => {
        const nothingIsEmpty = handleInputErrors(username,password)
        if(!nothingIsEmpty){
            return;
        }
        // handleInputErrors(username,password)
        // if
        setLoaidng(true);
        try {
            const res  = await fetch('/api/auth/login',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })
            const data  = await res.json();
            console.log(data)
            if(data.error){
                throw new Error(data.error)

            }
        localStorage.setItem("chat-user",JSON.stringify(data));
        setAuthUser(data);            
        } catch (error) {
            toast.error(error.message);
            console.log(error)
        }
        finally{

            setLoaidng(false);
        }
    }
    return {loading,login}
}

export default useLogin;

function handleInputErrors(username,password){
    if(!username||!password){
        toast.error("Please fill in all fields");
        return false;
    }
    return true;
}