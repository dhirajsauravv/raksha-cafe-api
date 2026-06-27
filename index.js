import express from "express";
import "dotenv/config";
import api from "./api/Api.js";

const app = express();

const port = process.env.PORT || 5000;

app.use("/api", api);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
