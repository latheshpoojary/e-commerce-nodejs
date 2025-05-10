const { Router } = require("express");
const {
  getCategoryList,
  categorySpecification,
  mapCategorySpecification,
} = require("../controllers/specification_category_map.controller");

const router = Router();
router.get("/:category_id", getCategoryList);
router.post("/", mapCategorySpecification);

module.exports = router;
