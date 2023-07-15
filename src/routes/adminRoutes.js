const express = require("express");
const path = require('path');
const router = express.Router();
const adminController = require("../controllers/adminController");
const validationsCreatePBC = require(path.join(__dirname, '../middlewares/validations/admin/validationCreatePBC.js'));


router.get("/table", adminController.table);

router.get("/create/pet", adminController.createPet);
router.post("/create/pet", validationsCreatePBC, adminController.storePet);
router.get("/update-delete/pet", adminController.updateDeletePet);

router.get("/create/category", adminController.createCategory);
router.post("/create/category", validationsCreatePBC, adminController.storeCategory);
router.get("/update-delete/category", adminController.updateDeleteCategory);

router.get("/create/brand", adminController.createBrand);
router.post("/create/brand", validationsCreatePBC, adminController.storeBrand);
router.get("/update-delete/brand", adminController.updateDeleteBrand);


module.exports = router;