const express = require("express");
const path = require('path');
const router = express.Router();
const adminController = require("../controllers/adminController");
const validationsPBC = require(path.join(__dirname, '../middlewares/validations/admin/validationPBC.js'));
const userLogged = require(path.join(__dirname, '../middlewares/auths/userLogged'));
const userNotLogged = require(path.join(__dirname, '../middlewares/auths/userNotLogged'));
const adminLogged = require(path.join(__dirname, '../middlewares/auths/adminLogged.js'));

router.get("/table", userNotLogged, adminLogged, adminController.table);

router.get("/create/pet", userNotLogged, adminLogged, adminController.createPet);
router.post("/create/pet", validationsPBC, adminController.storePet);
router.get("/update/pet/:id", userNotLogged, adminLogged, adminController.editPet);
router.put("/update/pet/:id", validationsPBC, adminController.updatePet);
router.delete("/delete/pet/:id", userNotLogged, adminController.deletePet);

router.get("/create/category", userNotLogged, adminLogged, adminController.createCategory);
router.post("/create/category", validationsPBC, adminController.storeCategory);
router.get("/update/category/:id", userNotLogged, adminLogged, adminController.editCategory);
router.put("/update/category/:id", validationsPBC, adminController.updateCategory);
router.delete("/delete/category/:id", adminController.deleteCategory);

router.get("/create/brand", userNotLogged, adminLogged, adminController.createBrand);
router.post("/create/brand", validationsPBC, adminController.storeBrand);
router.get("/update/brand/:id", userNotLogged, adminLogged, adminController.editBrand);
router.put("/update/brand/:id", validationsPBC, adminController.updateBrand);
router.delete("/delete/brand/:id", adminController.deleteBrand);

router.get("/users", userNotLogged, adminLogged, adminController.manageUsers);
router.put("/update/users/:id", adminController.updateAdminUsers);
router.delete("/delete/users/:id", adminController.deleteAdminUsers);

module.exports = router;