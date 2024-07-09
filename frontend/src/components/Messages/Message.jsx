import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation";



const Message = ({message}) => {

  const {authUser} =  useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId===authUser._id;
  const chatClassName = fromMe?'chat-end':'chat-start';
  const profilePic = fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubbleColor = fromMe? 'bg-orange-400':'bg-orange-950';
  const bubblePadding = fromMe? 'ps-96':'pe-96';
const messageCreateTime  = message.createdAt.substring(11,16)
  return (
    <>
    <div className={`chat ${chatClassName} ${bubblePadding}`} >
      {/* lalalal */}
        <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src={`${profilePic}`} alt="" />
        </div>
        </div>
        <div className={`chat-bubble text-white  ${bubbleColor} `}>{message.message}</div>
        <div className="chat-footer opacity-80 text-white text-xs flex gap-1 items-center">{messageCreateTime}</div>
    </div>
    </>
  )
}

export default Message