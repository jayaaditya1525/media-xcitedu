const express = require("express");
const jounRegister = require("../controllers/jounControllers");
const { protect } = require("../middlewares/protectedRoutes");

const router = express.Router();


// register journalist
router.post("/journalist",jounRegister);


module.exports = router
