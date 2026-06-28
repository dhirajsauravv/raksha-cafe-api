import express, { Router } from "express";
import { validateToken } from "../middleware/auth.js";

import mongoose from "mongoose";

const router = express.Router();

router.get("/", validateToken, (req, res) => {
  res.send(req.user);
});

export default router;
