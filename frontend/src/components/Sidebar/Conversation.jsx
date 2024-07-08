

const Conversation = () => {
    return (
      <>
      <div className="flex gap-2 hover:bg-orange-300 rounded p-2 m-2 py-1 cursor-pointer items-center">
          <div className="avatar online">
              <div className="w-12 rounded-full">
              <img src="https://avatar.iran.liara.run/public/girl?username=mymom" alt="User Avatar" />
              </div>
          </div>
          <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
              <p className="font-bold text-gray-200">Het Modi</p>
              <span className="text-xl">💖</span>
          </div>
          </div>
      </div>
  
      <div className="divider py-0 my-0 h-1"></div>
      
      </>
    )
  }
  
  export default Conversation