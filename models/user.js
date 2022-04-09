import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  password: Number,
});

const UserDetail = mongoose.model("UserDetail", userSchema);

export default UserDetail;
