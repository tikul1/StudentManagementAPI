const express = require("express");
const router = express.Router();
const jwtHelper = require("../helpers/jwtHelper");
const adminController = require("../controllers/adminController");

router.get("/", adminController.adminList);
router.get("/excel", adminController.excel);
router.get("/searchadmin/:id", adminController.adminById);
router.post("/addadmin", adminController.adminAdd);
router.put("/updateadmin/:id", adminController.adminUpdate);
router.delete("/removeadmin/:id", adminController.adminDelete);
router.post("/login", adminController.adminLogin);

module.exports = router;
