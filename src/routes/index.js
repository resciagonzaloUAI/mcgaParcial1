const express = require('express');

const router = express.Router();

//Devuelvo ok a la solicitud segun enunciado
router.get('', (req, res) => {
  res.send('OK');
})

module.exports = router;