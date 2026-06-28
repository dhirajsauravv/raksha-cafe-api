import express, { response, Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

const users = [];

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

    const userFound = users.find((user) => user.email === userData.email);
    if (!userFound) {
      return res.status(401).send({ message: "User not Found." });
    }

    if (!(await bcrypt.compare(userData.password, userFound.password))) {
      return res.status(401).send({ message: "Password incorrect." });
    }

    const token = jwt.sign({ email: userData.email }, process.env.PRIVATE_KEY);
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

    users.push({
      email: userData.email,
      password: await hash(userData.password),
    });

    const token = jwt.sign({ email: userData.email }, process.env.PRIVATE_KEY);
    res.send({ token: token });
  } catch (error) {
    res.status(500).send({ error: error.toString() });
  }
});

export default router;
