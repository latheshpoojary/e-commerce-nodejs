const { Router } = require("express");
const {
  create,
  getAllCategory,
  getSubCategory,
} = require("../controllers/category.controller");

const router = Router();

router.get("/", getAllCategory);
router.get("/:category_id", getSubCategory);
router.post("/", create);

module.exports = router;
