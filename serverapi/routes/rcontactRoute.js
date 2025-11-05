import express from "express";
const contactRoute = express.Router();
import * as contactController from "../controllers/contactController.js";

contactRoute.route("/submit").post(contactController.submitContactForm);

export default contactRoute;
