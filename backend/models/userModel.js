const mongoos = require("mongoos");

const userModel = mongoos.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, usique:true},
    password: { type: String, required: true },
    pic: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoos.model('User',messagerModel)
module.exports = User