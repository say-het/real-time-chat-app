import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from 'react-hot-toast'

const useSendMessage = ()=>{
    const [loading,setLoaidng] = useState();
    const {messages,setMessages,selectedConversation} = useConversation();

    const sendMessage = async (message)=>{
        setLoaidng(true)
        try {
            const res = await fetch(`api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({message})
            })
            const data  = await res.json();
            
            if(data.error){
                throw new Error(data.error)
            }
            setMessages([...messages,data]);
            
        } catch (error) {
            toast.error(error.message);
            console.log(error)
        }
        finally{
            setLoaidng(false)
        }
    }
    return {loading,sendMessage}

}

export default useSendMessage;