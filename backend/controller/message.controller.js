
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getreceiverSocketId,io } from "../socket/socket.js";
// import io from ''
export const sendMessage = async (req,res)=>{
try {
    const {message} = req.body;
    const {id:receiverId} = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participants:{$all:[receiverId,senderId]}
    })
    if(!conversation){
        conversation = await Conversation.create({
            participants:[receiverId,senderId]
        })
    }
    const newMessage = new Message({
        senderId,
        receiverId,
        message
    })  
    //Socket io - Real Time
    if(newMessage){
        conversation.messages.push(newMessage._id);
    }
    // await conversation.save();
    // await newMessage.save();
    await Promise.all([conversation.save(),newMessage.save()]);

    const receiverSocketId = getreceiverSocketId(receiverId);

    if(receiverSocketId!=undefined){
        io.to(receiverSocketId).emit("NewMessage",newMessage)
    }

    res.status(201).json(newMessage);
} catch (e) {
    console.log("Send Message Error",e)
    res.status(500).json({
        error:"Internal Server Error"
    })
}
}

export const getMessages = async(req,res)=>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants:{$all:[userToChatId,senderId]}
        }).populate("messages")
        if(!conversation){
            return res.status(200).json([]);
        }
        const messages = conversation.messages;
        res.status(200).json(messages);

    } catch (e) {
        console.log("Error in get messages",e);
        return res.status(500).json({
            error:"Error in get messages"
        });
    }
}