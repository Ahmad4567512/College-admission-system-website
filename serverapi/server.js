
import express from "express";
const app = express();
import * as config from "./configs/config.js";
const port = config.PORT || 9000;

import morgan from "morgan";
app.use(morgan("dev"));
app.use(express.json());
import cors from "cors";
app.use(cors());

import studentRoute from "./routes/rstudents.js";
import applyCourseRoute from "./routes/rapplyCourse.js";
import contactRoute from "./routes/rcontactRoute.js";


app.use("/api/v1/students", studentRoute);
app.use("/api/v1/apply", applyCourseRoute);
app.use("/api/v1/contact", contactRoute);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api/v1`);
});

import DbConfig from "./configs/dbconfig.js";

DbConfig();