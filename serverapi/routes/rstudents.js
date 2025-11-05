import express from "express";
const studentRoute = express.Router();
import * as studentController from "../controllers/cstudents.js";

studentRoute.route("/submit").post(studentController.submitForm);
studentRoute.route("/all").get(studentController.getAllStudents);

export default studentRoute;
