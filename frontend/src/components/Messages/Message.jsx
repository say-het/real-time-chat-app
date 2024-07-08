

const Message = () => {
  return (
    <>
    <div className="chat chat-end ps-96" >
        <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src="https://avatar.iran.liara.run/public/girl?username=mymom" alt="" />
        </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi BRUH how are you bro you gooood or not i am</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">Hi BRUH</div>
    </div>
    <div className="chat chat-start pe-96">
        <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src="https://avatar.iran.liara.run/public/girl?username=mymom" alt="" />
        </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi BRUH</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">Hi BRUH</div>
    </div>
    </>
  )
}

export default Message