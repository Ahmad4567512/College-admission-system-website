import ApplyCourse from "../models/applyCourseModel.js";

export const submitApplication = async (req, res) => {
  try {
    const existingApplicant = await ApplyCourse.findOne({
      $or: [
        { cnic: req.body.cnic },
      ]
    });

    if (existingApplicant) {
      return res.status(400).json({ error: "A student with this CNIC already exists!" });
    }

    console.log("Received Data:", req.body);
    const newApplication = new ApplyCourse(req.body);
    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully", newApplication });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
