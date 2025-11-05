import mongoose from "mongoose";
const { model, Schema } = mongoose;

const studentSchema = new Schema(
  {
    fullName: { type: String, required: true },
    fatherName: { type: String, required: true },
    gender: { type: String, required: true },
    campus: { type: String, required: true },
    degree: { type: String, required: true, trim: true },
    cnic: { type: String, required: true, unique: true },
    guardianCnic: { type: String, required: true }, 
    dob: { type: Date, required: true },
    guardianContact: { type: String, required: true }, 
    studentContact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    recentDegree: { type: String, required: true },
    passingYear: { type: Number, required: true },
    board: { type: String, required: true },
    obtainedMarks: { type: Number, required: true },
    totalMarks: { type: Number, required: true },
    school: { type: String, required: true },
    heardFrom: { type: String, required: true },
  },
  { timestamps: true }
);

const Student = model("Student", studentSchema);
export default Student;
