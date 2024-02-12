import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  username: {
    required: true,
    unique: true,
  },
  email: {
    required: true,
    unique: true,
  },
  fullName: {
    required: true,
    unique: true,
  },
});

export default Doctor = mongoose.model("Doctor", doctorSchema);
