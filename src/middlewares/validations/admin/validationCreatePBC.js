const { body } = require('express-validator');
const path = require('path');

const validations = [
    body('name').notEmpty().withMessage('El nombre es obligatorio')
];

module.exports = validations;