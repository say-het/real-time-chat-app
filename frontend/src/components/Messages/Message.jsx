import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation";


function convertUTCtoIST(utcTimeString) {
  const utcDate = new Date(`1970-01-01T${utcTimeString}Z`);

  const istOffsetInMinutes = 330;
  const istDate = new Date(utcDate.getTime() + (istOffsetInMinutes * 60 * 1000));

  let hours = istDate.getUTCHours();
  const minutes = String(istDate.getUTCMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 
  const strHours = String(hours).padStart(2, '0');

  return `${strHours}:${minutes} ${ampm}`;
}

const Message = ({message}) => {

  const {authUser} =  useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId===authUser._id;
  const chatClassName = fromMe?'chat-end':'chat-start';
  const profilePic = fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubbleColor = fromMe? 'bg-orange-400':'bg-orange-950';
  const bubblePadding = fromMe? 'ps-96':'pe-96';
const messageCreateTime  = convertUTCtoIST(message.createdAt.substring(11,16))

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