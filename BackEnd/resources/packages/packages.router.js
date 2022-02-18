const express = require('express');
const packagesRouter = express.Router();
const packagesController = require('./Packages.controllers');

packagesRouter.post('/', packagesController.createPackages);

packagesRouter.get('/', packagesController.getPackages);
packagesRouter.get('/:id', packagesController.getPackage);
packagesRouter.put('/:id?', packagesController.updatePackage);
packagesRouter.delete('/:id?', packagesController.deletePackage);


module.exports = packagesRouter;

