import Conversation from "./Conversation"

const Conversations = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto mb-4">
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations