import express from "express";
import menu from "./Menu.js";
import userRoute from "./UserRoute.js";
import orderRoute from "./Orders.js";

const router = express.Router();

router.use("/menu", menu);
router.use("/user", userRoute);
router.use("/orders", orderRoute);

export default router;
