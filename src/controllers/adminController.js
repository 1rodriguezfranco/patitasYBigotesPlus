const path = require('path');
const db = require(path.join(__dirname, "../../database/models"));

const adminController = {
    table: (req, res) =>{ res.render("./admin/table") },
    createPet: async (req, res) => {
		return res.render("./admin/pets/createPet.ejs");
    },
    updateDeletePet: async (req, res) => {
		let pets = await db.Pet.findAll();
		return res.render("./admin/pets/updateDeletePet.ejs", {pets});
    },
    createCategory: async (req, res) => {
		return res.render("./admin/categories/createCategory.ejs");
    },
    updateDeleteCategory: async (req, res) => {
		let categories = await db.ProductCategory.findAll();
		return res.render("./admin/categories/updateDeleteCategory.ejs", {categories});
    },
    createBrand: async (req, res) => {
		return res.render("./admin/brands/createBrand.ejs");
    },
    updateDeleteBrand: async (req, res) => {
		let brands = await db.Brand.findAll();
		return res.render("./admin/brands/updateDeleteBrand.ejs", {brands});
    }
};

module.exports = adminController;