const express = require('express');
const router = express.Router();
const cards = require('../db/cards')

router.get('/', function(req, res) {
  res.send(JSON.stringify(cards));
});

router.post('/', function(req, res) {
  const card = req.body
  cards.push(card)
  res.status(200).end()
  // res.status(500).end()
});

router.put('/', function(req, res) {
  const {text, id} = req.body
  let index = cards.findIndex(el => el.id === id)
  cards[index].text = text
  res.status(200).end()
})

router.delete('/:id', function(req, res){
  const {id} = req.params
  let index = cards.findIndex(el => el.id === id)
  cards.splice(index, 1)
  res.status(200).end()
})

module.exports = router;
