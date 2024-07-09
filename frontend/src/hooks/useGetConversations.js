import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useGetConversations = ()=>{
    const [loading,setLoading] = useState();
    const [conversations,setConversations] = useState([]);

    useEffect(()=>{
        const getConversations = async ()=>{
            setLoading(true);
            try {
                const res  = await fetch('/api/users')
                const data  = await res.json();
                console.log(data)
                if(data.error){
                    throw new Error(data.error)
    
                }
        
            setConversations(data);
            } catch (error) {
                toast.error(error.message);
                console.log(error)
            }
            finally{
                setLoading(false);
            }
        }
        getConversations();
    },[])

    return {loading,conversations}
}

export default useGetConversations;