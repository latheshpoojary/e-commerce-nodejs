const { Router } = require("express");
const {
  addAddress,
  getUserAddress,
} = require("../controllers/address.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");

const router = Router();

router.get("/", authMiddleware, getUserAddress);
router.post("/", authMiddleware, addAddress);

module.exports = router;
