import express from "express";
import menu from "./Menu.js";
import userRoute from "./UserRoute.js";

const router = express.Router();

router.use("/menu", menu);
router.use("/user", userRoute);

export default router;
