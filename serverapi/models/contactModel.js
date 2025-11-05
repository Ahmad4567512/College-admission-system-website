import mongoose from "mongoose";
const { model, Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = model("Contact", contactSchema);
export default Contact;
