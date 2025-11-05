import mongoose from "mongoose";
const { model, Schema } = mongoose;

const applyCourseSchema = new Schema(
  {
    studentName: { type: String, required: true },
    cnic: {type:String, required: true, unique: true},
    email: { type: String, required: true },
    studentContact: { type: String, required: true },
    gardianContact: { type: String, required: true},
    courseName: { type: String, required: true }, 
    message: { type: String },
    
  },
  { timestamps: true }
);

const ApplyCourse = model("ApplyCourse", applyCourseSchema);
export default ApplyCourse;
