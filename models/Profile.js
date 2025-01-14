const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  gender: {
    type: String,
  },
  dating_prefrence: {
    type: String,
  },
  bio: {
    type: String,
  },
  date_of_birth: {
    type: Date
  },
  image : {
    type: String
  }
});

const Profile = mongoose.model("profile", ProfileSchema);
module.exports = Profile;
