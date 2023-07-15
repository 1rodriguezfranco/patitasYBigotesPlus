const path = require('path');
const { validationResult } = require('express-validator');
const db = require(path.join(__dirname, "../../database/models"));

const adminController = {
    table: (req, res) =>{ res.render("./admin/table") },
    createPet: async (req, res) => {
      let pets = await db.Pet.findAll();
	  	return res.render("./admin/createPBC", {created: pets, route: "pet", singular: "mascota", plural: "Mascotas"});
    },
    storePet: async(req, res) =>{
      let resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0){
              return res.render('./admin/createPBC', {
                  errors: resultValidation.mapped(),
                  oldData: req.body,
                  created: pets, 
                  route: "pet", 
                  singular: "mascota", 
                  plural: "Mascotas"
            })
      } else {
        db.Pet.create({
          name: req.body.name
        });
        return res.redirect("/admin/create/pet");
      };
    },
    updateDeletePet: async (req, res) => {
      let pets = await db.Pet.findAll();
      return res.render("./admin/pets/updateDeletePet.ejs", {pets});
    },
    createCategory: async (req, res) => {
      let categories = await db.ProductCategory.findAll();
	  	return res.render("./admin/createPBC", {created: categories, route: "category", singular: "categoría", plural: "Categorías"});
    },
    storeCategory: async (req, res) =>{
      let resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0){
              return res.render('./admin/createPBC', {
                  errors: resultValidation.mapped(),
                  oldData: req.body,
                  created: categories, 
                  route: "category", 
                  singular: "categoría", 
                  plural: "Categorías"
            })
      } else {
        db.ProductCategory.create({
          name: req.body.name
        });
        return res.redirect("/admin/create/category");
      };
    },
    updateDeleteCategory: async (req, res) => {
      let categories = await db.ProductCategory.findAll();
      return res.render("./admin/categories/updateDeleteCategory.ejs", {categories});
    },
    createBrand: async (req, res) => {
      let brands = await db.Brand.findAll();
	  	return res.render("./admin/createPBC", {created: brands, route: "brand", singular: "marca", plural: "Marcas"});
    },
    storeBrand : async(req, res) =>{
      let resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0){
              return res.render('./admin/createPBC', {
                  errors: resultValidation.mapped(),
                  oldData: req.body,
                  created: brands, 
                  route: "brand", 
                  singular: "marca", 
                  plural: "Marcas"
            })
      } else {
        db.Brand.create({
          name: req.body.name
        });
        return res.redirect("/admin/create/brand");
      };
    },
    updateDeleteBrand: async (req, res) => {
      let brands = await db.Brand.findAll();
      return res.render("./admin/brands/updateDeleteBrand.ejs", {brands});
    }
};

module.exports = adminController;