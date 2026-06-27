import express, { Router } from "express";

const router = express.Router();

const menuItem = [
  {
    name: "Chicken Butter Croissant",
    description: "aaaha",
    price: 100,
    isAvailabe: true,
    image:
      "https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "coffee",
    description: "authentic coffee form kerela",
    price: 150,
    isAvailabe: true,
    image:
      "https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "tea",
    description: "chuski chai",
    price: 10,
    isAvailabe: true,
    image:
      "https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "cafe special maggi",
    description: "curly as you hair",
    price: 500,
    isAvailabe: true,
    image:
      "https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "veg sandwich",
    description: "eat your herbs, cows!",
    price: 100,
    isAvailabe: true,
    image:
      "https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

router.get("/", (req, res) => {
  res.send(menuItem);
});

export default router;
