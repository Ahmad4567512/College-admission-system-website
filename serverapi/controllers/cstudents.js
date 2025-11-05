import Student from "../models/studentModel.js";

export const submitForm = async (req, res) => {
  try {

    const existingStudent = await Student.findOne({
      $or: [
        { cnic: req.body.cnic },
      ]
    });

    if (existingStudent) {
      return res.status(400).json({ error: "A student with this CNIC already exists!" });
    }

    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: "Form submitted successfully", newStudent });

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
