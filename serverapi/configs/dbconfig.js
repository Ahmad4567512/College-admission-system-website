import mongoose from "mongoose";
import { MONOGODB_CLOUD } from "./config.js";

const DbConfig = async () => {
  try {
    const conn = await mongoose.connect(MONOGODB_CLOUD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(` Db connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default DbConfig;
