import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
const app = express();
import cors from "cors";
import connectDB from "./config/dbConnection.js";
const PORT = process.env.PORT;
import authRoutes from "./routes/authRoutes.js";
import apiRoutes from "./routes/apiRoutes.js"

connectDB();

app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(passport.initialize());

app.use("/", authRoutes);
app.use("/api/v1/",apiRoutes);

app.listen(PORT, async () => {
  console.log("Server started at port", PORT);
});
