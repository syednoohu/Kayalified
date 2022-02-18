const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config();

const { errorHandler }  = require('./middleware/errorHandler')
const { notFound }  = require('./middleware/errorHandler')

const connectDB = require('./config/db');
const packagesRoutes = require('./resources/packages/packages.router');

connectDB();
app.use(express.json());  
app.use(express.urlencoded({ extended : false }));  
app.use(cors())

//Test API
app.get('/',(req,res)=>res.status(202).send(' API Running...!!!'));

app.use('/api/packages', packagesRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));