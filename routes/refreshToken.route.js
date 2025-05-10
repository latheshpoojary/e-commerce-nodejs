const { Router } = require("express");
const { verifyRefreshToken } = require("../utils/jwt.service");

const router = Router();

router.get("/", (req, res, next) => {
  const token = req.cookies;
  token;
});

module.exports = router;
