const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
    {
        chatName: {type: String, trim: true},
        isGroupChat: {type: Boolean, default: false},
        users: [
            {
                //this will contain 'id' to that perticular user 
                type: mongoose.Schema.Types.ObjectId,
                //refere to User model
                ref: "User",
            }
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        //so mongoose create timestamps evry time when new chat add
        timestamps: true,
    }
);

//create a model
const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;


// in chatModel
// require data is

//chatName
//Is GroupChat
//Users  // users are may be multiples so use Array 
//LatestMessage
//GroupAdmin

//Users, LatestMessage, GroupAdmin require 'id' that perticular user