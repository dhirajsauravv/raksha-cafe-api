import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      quantity: Number,
    },
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now },
});

export default orderSchema;
