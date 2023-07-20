const express = require("express");
const path = require('path');
const router = express.Router();
const adminController = require("../controllers/adminController");
const validationsPBC = require(path.join(__dirname, '../middlewares/validations/admin/validationPBC.js'));

router.get("/table", adminController.table);

router.get("/create/pet", adminController.createPet);
router.post("/create/pet", validationsPBC, adminController.storePet);
router.get("/update/pet/:id", adminController.editPet);
router.put("/update/pet/:id", validationsPBC, adminController.updatePet);
router.delete("/delete/pet/:id", adminController.deletePet);

router.get("/create/category", adminController.createCategory);
router.post("/create/category", validationsPBC, adminController.storeCategory);
router.get("/update/category/:id", adminController.editCategory);
router.put("/update/category/:id", validationsPBC, adminController.updateCategory);
router.delete("/delete/category/:id", adminController.deleteCategory);

router.get("/create/brand", adminController.createBrand);
router.post("/create/brand", validationsPBC, adminController.storeBrand);
router.get("/update/brand/:id", adminController.editBrand);
router.put("/update/brand/:id", validationsPBC, adminController.updateBrand);
router.delete("/delete/brand/:id", adminController.deleteBrand);

router.get("/users", adminController.manageUsers);

module.exports = router;