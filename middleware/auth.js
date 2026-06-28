import jwt from "jsonwebtoken";

function validateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send({ error: "Access denied. No token provided." });
  }
  try {
    var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = { email: decoded.email, id: decoded.id };

    next();
  } catch (error) {
    res.status(401).send({ error: error.toString() });
  }
}

export { validateToken };
