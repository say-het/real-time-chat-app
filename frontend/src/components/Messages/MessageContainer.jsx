import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-[450px]  flex flex-col ">
      {!selectedConversation ? (
        <NoOneSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            {/* <span className="label-text">To: </span>{" "} */}
            <span className="font-bold text-gray-900">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoOneSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋🏼 {authUser.fullName}</p>
        <p>Select a Chat to Start Messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};



// import useGetMessages from "../../hooks/useGetMessages"
// import Message from "./Message"
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import { useRef, useEffect } from "react";
// // import useConversation from "../../zustand/useConversation";

// const Messages = () => {
//   const {loading,messages} = useGetMessages();
//   const lastMessageRef = useRef(null);
//   useEffect(() => {
    
//   setTimeout(() => {
//     lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
//   }, 100);
//   }, [messages])
  

//   console.log("msgs",messages)
//   return (
//     <div className="px-4 flex-1 overflow-auto">

//         {!loading && messages.length>0 && messages.map((message)=>(
//           <div key={message._id} ref={lastMessageRef}>
//             <Message message={message}/>
//           </div>
          
//         ) )}

//         {loading && <MessageSkeleton/>}
//         {!loading&&messages.length===0&&(
//           <p className="text-center">Send a Message to start the conversation</p>
//         )}

//     </div>
//   )
// }

// export default Messages