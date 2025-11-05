import Contact from "../models/contactModel.js";

export const submitContactForm = async (req, res) => {
  try {
    console.log("Received Contact Form Data:", req.body);
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Message submitted successfully", newContact });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
