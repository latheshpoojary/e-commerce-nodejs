const { Router } = require("express");
const {
  addProduct,
  getProductDetails,
} = require("../controllers/product.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const router = Router();

router.get("/:product_id", getProductDetails);
router.post("/", authMiddleware, addProduct);

module.exports = router;
