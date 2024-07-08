import User from "../models/user.model.js";

export const getUsersFromSidebar = async (req,res)=>{
    try {
        const currUser = req.user._id;
        const allUsers = await User.find({_id:{ $ne:currUser}}).select("-password");

        return res.status(200).json(allUsers)
    } catch (e) {
        console.log("SideBar error",e);
        return res.status(500).json({
            error:"Internal Server Error"
        })
    }
}

