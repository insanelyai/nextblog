import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Required: Username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Required: Email"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
