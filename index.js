import express from "express";
import "dotenv/config";
import api from "./api/Api.js";
import cors from "cors";
import { connectDB } from "./config/db.js";

const app = express();

if (process.env.NODE_ENV === "dev") app.use(cors());

const port = process.env.PORT || 5000;
connectDB();

app.use("/api", api);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
