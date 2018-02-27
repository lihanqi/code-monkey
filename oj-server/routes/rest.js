const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const problemService = require("../services/problemService");
const executionService = require("../services/executionService");
// parse application/json
router.use(bodyParser.json());

// GET api/v1/problems
//  - return problems
router.get("/problems", (req, res) => {
	// console.log("server received request");
	problemService
		.getProblems()
		.then(problems => {
			res.json(problems);
		})
		.catch(error => {
			res.status(500).send(error);
		});
});

// GET api/v1/problems/:id
//   - return problem by id
router.get("/problems/:id", (req, res) => {
	const id = +req.params.id;
	problemService
		.getProblem(id)
		.then(problem => res.json(problem))
		.catch(error => {
			res.status(404).send(error);
		});
});

// POST api/v1/problems
// - add new problems
router.post("/problems", (req, res) => {
	problemService
		.addNewProblem(req.body)
		.then(problem => {
			res.json(problem);
		})
		.catch(error => {
			res.status(400).send(error);
		});
});

// POST api/v1/execution
// - excute the code
router.post("/execution", (req, res) => {
	executionService
		.execute(req.body)
		.then(data => {
			res.json(data);
		})
		.catch(error => {
			res.status(500).send(error);
		});
});
module.exports = router;
