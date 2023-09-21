const mongoose = require('mongoose');

const MONGO_URI = 'test';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 

  dbName: 'CoworkingLocationsDatabase'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err))

const Schema = mongoose.Schema

// sets a coworkingSchema for the 'coworkingLocation' collection
const coworkingSchema = new Schema({
  id: Number,
  name: String,
  address: String,
  hours: String,
  wifiSpeed: String,
  outlet: Boolean,
  restroom: Boolean
})

// creats a model for the 'coworkingLocation' collection that will be part of the export
const coworkingLocation = mongoose.model('coworkingLocations', coworkingSchema)

// export module to be used in controller
module.exports = {
  coworkingLocation
}