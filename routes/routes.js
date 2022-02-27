const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

router.get('/getAll', (req, res) => {
  res.send('Get all API');
});

router.get('/getOne/:id', (req, res) => {
  res.send(req.params.id);
  console.log(req.params.id);
});

router.post('/post', (req, res) => {
  res.send('Post API');
});

router.put('/patch/:id', (req, res) => {
  res.send('Update ID API');
});

router.delete('/delete/:id', (req, res) => {
  res.send('Delete an ID API');
});

module.exports = router;
