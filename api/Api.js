import express from "express";
import menu from "./Menu.js";

const router = express.Router();

router.use("/menu", menu);

export default router;
