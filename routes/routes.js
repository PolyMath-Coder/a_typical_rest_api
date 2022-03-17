const express = require('express');
const res = require('express/lib/response');
const { findByIdAndUpdate } = require('../models/model');
const Model = require('../models/model');
const router = express.Router();

router.get('/getAll', async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get('/getOne/:id', async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200).json({ result: data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  // res.send(req.params.id);
  // console.log(req.params.id);
});

router.post('/post', async (req, res) => {
  // const {name, age, country} = req.body
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
    country: req.body.country,
  });
  try {
    const savedData = await data.save();
    res.status(200).send(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/patch/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const options = { new: true };
    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.status(200).send(result);
    console.log(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const resulting = await Model.findByIdAndDelete(id);

    res.send(`Document with ${resulting.name} has been deleted. `);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
