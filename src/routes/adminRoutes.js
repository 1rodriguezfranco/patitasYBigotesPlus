const express = require("express");
const path = require('path');
const router = express.Router();
const adminController = require("../controllers/adminController");
const validationsCreatePBC = require(path.join(__dirname, '../middlewares/validations/admin/validationCreatePBC.js'));
const validationsEditPBC = require(path.join(__dirname, '../middlewares/validations/admin/validationEditPBC.js'));

router.get("/table", adminController.table);

router.get("/create/pet", adminController.createPet);
router.post("/create/pet", validationsCreatePBC, adminController.storePet);
router.get("/update/pet/:id", adminController.editPet);
router.put("/update/pet/:id", validationsEditPBC, adminController.updatePet);
router.delete("/delete/pet/:id", adminController.deletePet);

router.get("/create/category", adminController.createCategory);
router.post("/create/category", validationsCreatePBC, adminController.storeCategory);
router.get("/update/category/:id", adminController.editCategory);
router.put("/update/category/:id", adminController.updateCategory);
router.delete("/delete/category/:id", adminController.deleteCategory);

router.get("/create/brand", adminController.createBrand);
router.post("/create/brand", validationsCreatePBC, adminController.storeBrand);
router.get("/update/brand/:id", adminController.editBrand);
router.put("/update/brand/:id", adminController.updateBrand);
router.delete("/delete/brand/:id", adminController.deleteBrand);

router.get("/users", adminController.manageUsers);

module.exports = router;