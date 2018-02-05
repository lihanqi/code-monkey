const express = require('express');
const router = express.Router();
const problemService = require('../services/problemService');

router.get('/', (req, res) => {
    res.json(problemService.getProblems());
})

// router.get('/:id', (req, res) => {
//     id = 
//     res.json(problemService.getProblem())
// })
module.exports = router