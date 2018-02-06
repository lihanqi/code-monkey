const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const problemService = require('../services/problemService');

// parse application/json
router.use(bodyParser.json());

// GET api/v1/problems - return problems 
router.get('/problems', (req, res) => {
    problemService.getProblems()
        .then((problems) => { res.json(problems);})
        .catch((error) => { res.send(error);});
})

// GET api/v1/problems/:id - return problem by id
router.get('/problems/:id', (req, res) => {
    id = +req.params.id;
    problemService.getProblem(id)
        .then((problem) => res.json(problem))
        .catch((error) => {
            res.send(error);
            console.log(error);
        });
})

// POST api/v1/problems - add new problems 
router.post('/problems', (req, res) => {
    problemService.addNewProblem(req.body).then((problem) => {
        res.json(problem);
    }).catch((error) => {
        res.send(error);
    });
})
module.exports = router