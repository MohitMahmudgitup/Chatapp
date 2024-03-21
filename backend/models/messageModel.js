const mongoos = require("mongoos");

const messagerModel = mongoos.Schema(
  {
    sender: {
      type: mongoos.Schema.Type.ObjectId,
      ref: "User",
    },
    content: {
      type: Sting,
      trim: true,
    },
    chat: {
      type: mongoos.Schema.Type.ObjectId,
      ref: "Chat",
    },
  },
  {
    timestamps: true,
  }
);
const Message = mongoos.model('Message',messagerModel)
module.exports = Message
