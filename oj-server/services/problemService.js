const ProblemModel = require("../models/Problem.model");

const getProblems = function() {
	return new Promise((resolve, reject) => {
		ProblemModel.find((err, problems) => {
			if (err) {
				reject("ERROR: Cannot get problems from database - " + err);
			} else {
				resolve(problems);
			}
		});
	});
};

const getProblem = function(id) {
	return new Promise((resolve, reject) => {
		ProblemModel.findOne({ id: id }, (err, problem) => {
			if (err) {
				reject("ERROR: Cannot get problem from database - " + err);
			} else if (problem == null) {
				reject("ERROR: Problem does not exist in database");
			} else {
				resolve(problem);
			}
		});
	});
};

// todo: any other way to revise this? functional code is too deep.
const addNewProblem = function(newProblem) {
	return new Promise((resolve, reject) => {
		ProblemModel.findOne({ title: newProblem.title }, (err, problem) => {
			if (problem) {
				reject("ERROR: Problem already exists");
			} else {
				ProblemModel.count((err, count) => {
					if (err) {
						reject("COUNTING ERROR:" + err);
					} else {
						newProblem["id"] = count + 1;
						let newProblemDocument = new ProblemModel(newProblem);
						newProblemDocument.save((error, problem) => {
							if (error) {
								reject(error);
							} else {
								resolve(problem);
							}
						});
					}
				});
			}
		});
	});
};

module.exports = {
	getProblem,
	getProblems,
	addNewProblem
};
