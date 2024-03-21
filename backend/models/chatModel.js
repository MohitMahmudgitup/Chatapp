const mongoos = require("mongoose");
// chatName
// isGroupChat
// user
// latestMessage
// groupAdmin
const chatModiul = mongoos.Schema(
  {

    chatName: { type : String, trim : true },
    isGroupChat: { type : Boolean, default : false },
    user: [ { type : mongoos.Schema.ObjectId , ref : "Uses" }, ],
    latestMessage: { type : mongoos.Schema.ObjectId , ref : "Messager" },
    groupAdmin: { type : mongoos.Schema.ObjectId , ref : "User" },
 
  },
  
  {
    timestamps: true,
  }
);

const Chat = mongoos.model("Chat", chatModiul);
module.exports = Chat;
