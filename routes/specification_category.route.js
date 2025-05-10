const { Router } = require("express");
const { create } = require("../controllers/specification_category.controller");

const router = Router();

router.post("/", create);

module.exports = router;
