import express, { response, Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userSchema from "../schema/User.js";
import mongoose from "mongoose";

const router = express.Router();

const users = mongoose.model("User", userSchema);

async function hash(password) {
  const saltRounds = Number(process.env.SALT_ROUNDS);
  return await bcrypt.hash(password, saltRounds);
}

router.post("/login", async (req, res) => {
  try {
    const userData = req.body;

    if (!userData.email || !userData.password) {
      return res.sendStatus(400);
    }

    const userFound = await users.findOne({ email: userData.email }).exec();
    if (!userFound) {
      return res.status(401).send({ message: "User not Found." });
    }

    if (!(await bcrypt.compare(userData.password, userFound.password))) {
      return res.status(401).send({ message: "Password incorrect." });
    }

    const token = jwt.sign(
      { email: userData.email, id: userFound.id },
      process.env.PRIVATE_KEY,
    );
    res.send({ token: token });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

router.post("/register", async (req, res) => {
  try {
    const userData = req.body;

    if (!userData.email || !userData.password || !userData.name) {
      return res.sendStatus(400);
    }

    const newUser = await users.insertOne({
      email: userData.email,
      password: await hash(userData.password),
      name: userData.name,
    });

    const token = jwt.sign(
      { email: userData.email, id: newUser.id },
      process.env.PRIVATE_KEY,
    );
    res.send({ token: token });
  } catch (error) {
    res.status(500).send({ error: error.toString() });
  }
});

export default router;
