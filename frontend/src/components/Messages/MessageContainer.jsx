import Messages from "./Messages"
import MessageInput from "./MessageInput"
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
    const noOneSelected = true;
  return (
    <div className="md:min-[450px]  flex flex-col ">
       {noOneSelected?<NoOneSelected/>: <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="font-bold text-gray-900">Het Modi</span>
        </div>
        <Messages/>  
        <MessageInput/>  
        </>}
    </div>
  )
}
export default MessageContainer;

const NoOneSelected = () => {
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋🏼 Het Modi</p>
                <p>Select a Chat to Start Messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>

        </div>      
    );
  
}
