import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  mobile: String,
  email: String,
  address: String,
  createdAt: Date,
});

const User = mongoose.model("user", userSchema);
export default User;