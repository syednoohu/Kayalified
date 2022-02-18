const mongoose = require ('mongoose');

options ={
  useNewUrlParser: true,
   useUnifiedTopology: true 
}
const connectDB = async () =>{
  const con = await mongoose.connect(process.env.MONGOURL, options)
  .then(() => {
    console.log(' !! Connected with Success!! ');
  },
    err => {
      console.log(err, ' DB Fails to connect!! ');
      process.exit(1);
    }
  );
}

module.exports = connectDB;