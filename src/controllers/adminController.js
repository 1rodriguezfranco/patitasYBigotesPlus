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
    editPet: async (req, res) => {
      let petsInDB = await db.Pet.findAll();
      let pets = petsInDB.filter(i => i.id != req.params.id);
      let pet = await db.Pet.findByPk(req.params.id);
      return res.render("./admin/updatePBC.ejs", {created: pets, toEdit: pet, route: "pet", singular: "mascota", plural: "Mascotas"});
    },
    updatePet: async (req, res) => {
      let petsInDB = await db.Pet.findAll();
      let pets = petsInDB.filter(i => i.id != req.params.id);
      let pet = await db.Pet.findByPk(req.params.id);
      let resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0){
            return res.render('./admin/updatePBC', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                created: pets, 
                toEdit: pet,
                route: "pet", 
                singular: "mascota", 
                plural: "Mascotas"
            });
      } else {
        db.Pet.update(
          {name: req.body.name},
          {where: {id: req.params.id}}
        )
        .then(() =>{
          return res.redirect('/admin/create/pet');
        })
      };
    },
    deletePet: (req, res) =>{
      db.Pet.destroy({
        where: {id: req.params.id}
      })
        .then(() =>{
          res.redirect('/admin/create/pet');
        })
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
    editCategory: async (req, res) =>{
      let categoriesInDB = await db.ProductCategory.findAll();
      let categories = categoriesInDB.filter(i => i.id != req.params.id);
      let category = await db.ProductCategory.findByPk(req.params.id);
      return res.render("./admin/updatePBC.ejs", {created: categories, toEdit: category, route: "category", singular: "categoría", plural: "Categorías"});
    },
    updateCategory: async (req, res) => {
      let categoriesInDB = await db.ProductCategory.findAll();
      let categories = categoriesInDB.filter(i => i.id != req.params.id);
      let category = await db.ProductCategory.findByPk(req.params.id);
      let resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0){
            return res.render('./admin/updatePBC', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                created: categories, 
                toEdit: category,
                route: "pet", 
                singular: "mascota", 
                plural: "Mascotas"
            });
      } else {
        db.ProductCategory.update(
          {name: req.body.name},
          {where: {id: req.params.id}}
        )
        .then(() =>{
          return res.redirect('/admin/create/category');
        })
      }
    },
    deleteCategory: (req, res) =>{
      db.ProductCategory.destroy({
        where: {id: req.params.id}
      })
        .then(() =>{
          res.redirect('/admin/create/category');
        })
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
    editBrand: async (req, res) => {
      let brandsInDB = await db.Brand.findAll();
      let brands = brandsInDB.filter(i => i.id != req.params.id);
      let brand = await db.Brand.findByPk(req.params.id);
      return res.render("./admin/updatePBC.ejs", {created: brands, toEdit: brand, route: "brand", singular: "marca", plural: "Marcas"});
    },
    updateBrand: async (req, res) =>{
      let brandsInDB = await db.Brand.findAll();
      let brands = brandsInDB.filter(i => i.id != req.params.id);
      let brand = await db.Brand.findByPk(req.params.id);
      let resultValidation = validationResult(req);
      if (resultValidation.errors.length > 0){
            return res.render('./admin/updatePBC', {
                errors: resultValidation.mapped(),
                oldData: req.body,
                created: brands, 
                toEdit: brand, 
                route: "brand", 
                singular: "marca", 
                plural: "Marcas"
            });
      } else {
        db.Brand.update(
          {name: req.body.name},
          {where: {id: req.params.id}}
        )
        .then(() =>{
          return res.redirect('/admin/create/brand');
        })
      }
    },
    deleteBrand: (req, res) =>{
      db.Brand.destroy({
        where: {id: req.params.id}
      })
        .then(() =>{
          res.redirect('/admin/create/brand');
        })
    },
    manageUsers: async (req, res) =>{
      let users = await db.User.findAll();
      return res.render("./admin/manageUsers.ejs", {users});
    }
};

module.exports = adminController;