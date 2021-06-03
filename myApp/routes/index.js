const express = require("express");
const router = express.Router();

const controller = require("../controllers/ProdutoController");
/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "DT3" });
// });
router.get("/", controller.index);
router.post("/", controller.create);

module.exports = router;
