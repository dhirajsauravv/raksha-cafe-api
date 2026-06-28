import express, { Router } from "express";
import menuItemSchema from "../schema/MenuItem.js";
import mongoose from "mongoose";

const router = express.Router();

const menuItem = mongoose.model("MenuItem", menuItemSchema);

router.get("/", async (req, res) => {
  res.send(await menuItem.find({}));
});

export default router;
