// need to refactor the DRY code
const {Packages} = require('./packages.model');
const mongoose = require ('mongoose');

const packagesController = {
  async createPackages(req, res, next) {
    const {totalSections, amount, image, heading, info, description} = req.body;
    try {
      const packages = new Packages({totalSections, amount, image, heading, info, description});
      await packages.save();
      return res.status(200).json(packages);
    } 
    catch (err) {
      const error = new Error('Cannot create the Package')
      res.status(501);
      next(error)
    }
  },
  
  async getPackages(req, res, next) {
    try {
      let response = await Packages.find({})
      return res.status(200).json(response);
    } 
    catch (err) {
      const error = new Error('Cannot get the Package(s)')
      res.status(501);
      next(error)
    }
  },

  
  async updatePackage(req, res, next) {
    try {
      console.log(!req.params.id)

      if (!req.params.id){
        res.status(400)
        throw new Error('Please enter Valid Package ID');
      }
      if (!mongoose.Types.ObjectId.isValid( req.params.id)) {
        res.status(401)
         throw new Error('Invalid Package ID');
       }   
       let package = await Packages.findById({_id:req.params.id});
       if (!package){
        res.status(402);
        throw new Error ( 'Package Not Found!')
       }
        let updatedPackage = await Packages.findByIdAndUpdate({_id:req.params.id},{$set:req.body} , {new: true});
        return res.status(200).json(updatedPackage);
    } catch (err) {
        res.status(res.statusCode ? res.statusCode : 501);
        next(err)
    }
  },

  async getPackage(req, res, next) {
    try {
      // below code irrelavant, 
      //coz if !req.params.id getPackages get exec
      if (!req.params.id){
        res.status(400)
        throw new Error('Please enter Valid Package ID');
      }
      if (!mongoose.Types.ObjectId.isValid( req.params.id)) {
        res.status(401)
        throw new Error('Invalid Package ID');
      }   
      let package = await Packages.findById({_id:req.params.id});
      if (!package){
       res.status(402);
       throw new Error ( 'Package Not Found!')
      }
      package = await Packages.findById({_id:req.params.id});
      return res.status(200).json({package});  // WY {person}

    } catch (err) {
        res.status(res.statusCode ? res.statusCode : 501);
        next(err)
    }
  },

  async deletePackage(req, res, next) {
    console.log('inside deletepackage')
    try {
      if (!req.params.id){
        res.status(400)
        throw new Error('Please enter Valid Package ID');
      }
      if (!mongoose.Types.ObjectId.isValid( req.params.id)) {
        res.status(401)
        throw new Error('Invalid Package ID');
      }   
      let package = await Packages.findById({_id:req.params.id});
      if (!package){
       res.status(402);
       throw new Error ( 'Package Not Found!')
      }
      package = await Packages.findByIdAndDelete({_id:req.params.id});
      return res.status(200).json({package});  // WY {person}

    } catch (err) {
        res.status(res.statusCode ? res.statusCode : 501);
        next(err)
    }
  },



}

module.exports = packagesController;