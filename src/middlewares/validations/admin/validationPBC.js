const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('El nombre es obligatorio')
];

module.exports = validations;