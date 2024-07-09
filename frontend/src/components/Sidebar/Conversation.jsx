import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation"


const Conversation = ({conversation,lastIdx}) => {
    const {selectedConversation,setSelectedConversation} = useConversation();
    const isCurrentConversation = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isonline = onlineUsers.includes(conversation._id); 
    return (
      <>
      <div className={`flex gap-2 hover:bg-orange-300 rounded p-2 m-2 py-1 cursor-pointer items-center ${isCurrentConversation?"bg-orange-300":""}`} onClick={()=>{setSelectedConversation(conversation)}}>
          <div className={`avatar ${isonline?"online":""}`}>
              <div className="w-12 rounded-full">
              <img src={conversation.profilePic} alt="User Avatar" />
              </div>
          </div>
          <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
              <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
          </div>
      </div>
  
      {!lastIdx && <div className="divider py-0 my-0 h-1"></div>}
      
      </>
    )
  }
  
  export default Conversation