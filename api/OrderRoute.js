import express, { Router } from "express";
import { validateToken } from "../middleware/auth.js";
import orderSchema from "../schema/Order.js";
import mongoose from "mongoose";
import menuItemSchema from "../schema/MenuItem.js";

const router = express.Router();

const orders = mongoose.model("Order", orderSchema);
const menuItem = mongoose.model("MenuItem", menuItemSchema);

router.get("/", validateToken, async (req, res) => {
  res.send(await orders.find({ userId: req.user.id }));
});

router.post("/checkout", validateToken, async (req, res) => {
  try {
    const body = req.body;

    const prices = await Promise.all(
      body.map(async (item) => {
        const foundItem = await menuItem.findById(item.menuItem);
        if (!foundItem)
          throw new Error("Menu item with ID " + item.menuItem + " not found.");
        return foundItem.price * item.quantity;
      }),
    );

    const amount = Number(prices.reduce((acc, cur) => acc + cur, 0));

    const newOrder = await orders.insertOne({
      items: body,
      userId: req.user.id,
      totalAmount: amount,
    });
    res.status(201).send(newOrder);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;
