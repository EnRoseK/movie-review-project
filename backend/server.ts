import app from "./app";
import "dotenv/config";
import mongoose from "mongoose";

const port = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_CONNECTION_STRING || "";

mongoose.connect(MONGO_URL);

mongoose.connection.once("open", () => {
  console.log("Mongoose connected");
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
