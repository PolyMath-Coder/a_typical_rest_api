const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newData = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model('info', newData);

module.exports = Model;
