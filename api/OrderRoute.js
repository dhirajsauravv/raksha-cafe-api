import express, { Router } from "express";
import { validateToken } from "../middleware/auth.js";
import orderSchema from "../schema/Order.js";
import mongoose from "mongoose";

const router = express.Router();

const orders = mongoose.model("Order", orderSchema);
router.get("/", validateToken, async (req, res) => {
  res.send(await orders.find({ userId: req.user.id }));
});

export default router;
