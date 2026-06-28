import { Schema } from "mongoose";

const menuItemSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  isAvailable: Boolean,
  image: String,
});

export default menuItemSchema;
