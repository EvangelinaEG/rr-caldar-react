const mongoose = require('mongoose');
// Databese connection values
const MONGO_DB_USER = process.env.MONGO_DB_USER;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const MONGO_DB_DATABASE = process.env.MONGO_DB_DATABASE;

const db = {};
db.mongoose = mongoose;
db.url = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.wl5wc.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
db.Appointments = require('./models/appointments');
db.Boilers = require('./models/boilers');
db.BoilerTypes = require('./models/boiler-types');
db.Buildings = require('./models/buildings');
db.Customers = require('./models/customers.js');
db.Technicians = require('./models/technicians');
//const port = process.env.PORT || '3000';

//mongoose.connect(db.url) ;
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database, Successfully !');
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });