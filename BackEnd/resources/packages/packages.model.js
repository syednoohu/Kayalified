const { check, validationResult} = require('express-validator')
const mongoose = require('mongoose');
const PackagesSchema = new mongoose.Schema(
  {
    totalSections :   {type: Number, required: false},
    amount  :   {type: Number, required: false},
    image   :   {type: String, required: false},
    info    :   {type: String, required: false},
    description :   {type: String, required: false},
    dateCreated :  {type: Date,   required: false, default: Date.now},
    dateModified: {type: Date,   required: false, default: Date.now}
  }
);

const Packages = mongoose.model('Packages', PackagesSchema);

const validate = [  
    [
      check('totalSections', ' Please enter first name....').not().isEmpty(),
      check('amount', ' Please enter last name').not().isEmpty(),
      check('image', ' Please enter age').not().isEmpty(),
      check('heading', ' Please enter stack').not().isEmpty(),
      check('info', ' Please enter about').not().isEmpty(),
      check('description', ' Please enter about').not().isEmpty(),
    ], 

    (req, res, next) => {
      const errors = validationResult(req)
        if (errors.isEmpty()) {
          return next()
        }
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
        res.status(400).json({errors: extractedErrors})
    }
 ]

module.exports = {Packages,validate} 
