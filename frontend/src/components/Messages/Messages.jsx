import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import { useRef, useEffect } from "react";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";
// import useConversation from "../../zustand/useConversation";

const Messages = () => {
  const {loading,messages} = useGetMessages();
   const lastMessageRef = useRef(null);
   useListenMessages();
   useEffect(() => {
    
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    }, 100);
    }, [messages])
  
  // console.log("msgs",messages)
  return (
    <div className="px-4 flex-1 overflow-auto">

        {!loading && messages.length>0 && messages.map((message)=>(
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message}/>
          </div>
          
        ) )}

        {loading && <MessageSkeleton/>}
        {!loading&&messages.length===0&&(
          <p className="text-center">Send a Message to start the conversation</p>
        )}

    </div>
  )
}

export default Messages;


// import useGetMessages from "../../hooks/useGetMessages"
// import Message from "./Message"
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import { useRef, useEffect } from "react";
// // import useConversation from "../../zustand/useConversation";

// const Messages = () => {
//   const {loading,messages} = useGetMessages();
//   const lastMessageRef = useRef(null);

  

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