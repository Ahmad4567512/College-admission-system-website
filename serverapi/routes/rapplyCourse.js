import express from "express";
const applyCourseRoute = express.Router();
import * as courseController  from "../controllers/capplyCourse.js";

applyCourseRoute.route("/submit").post(courseController.submitApplication);

export default applyCourseRoute;
