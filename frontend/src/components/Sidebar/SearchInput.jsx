
import { useState } from "react"
import { IoSearchSharp } from "react-icons/io5"
import useConversation from "../../zustand/useConversation.js";
import toast from "react-hot-toast";
import useGetConversations from '../../hooks/useGetConversations.js'

const SearchInput = () => {
  const [search,setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      toast.error("Search term atleast 3 characters long")
      return;
    }
    
    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(!conversation){
      toast.error("No Such Person Here!")
    }
    else{
      setSelectedConversation(conversation);
      setSearch("");
    }
  }
  return (
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 pb-0">
      <input type="text" placeholder="Search.." value={search} onChange={(e)=>setSearch(e.target.value)} className="input input-bordered rounded-full"/>
      <button className="btn btn-circle bg-orange-300 text-white" type="submit">
      <IoSearchSharp className="w-6 h-6 outline-none"/>
      </button>
    </form>
  )
}

export default SearchInput