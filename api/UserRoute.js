import express, { response, Router } from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

const users = [];

router.post("/login", (req, res) => {
  try {
    const userData = req.body;

    if (!userData.email || !userData.password) {
      return res.sendStatus(400);
    }

    const userFound = users.find((user) => user.email === userData.email);
    if (!userFound) {
      return res.status(401).send({ message: "User not Found." });
    }

    if (userFound.password !== userData.password) {
      return res.status(401).send({ message: "Password incorrect." });
    }

    const token = jwt.sign({ email: userData.email }, process.env.PRIVATE_KEY);
    res.send({ token: token });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

router.post("/register", (req, res) => {
  try {
    const userData = req.body;

    if (!userData.email || !userData.password || !userData.name) {
      return res.sendStatus(400);
    }

    users.push({ email: userData.email, password: userData.password });

    const token = jwt.sign({ email: userData.email }, process.env.PRIVATE_KEY);
    res.send({ token: token });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

export default router;
