const ProblemModel = require('../models/Problem.model');


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
}

const getProblem = function(id) {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({'id': id}, (err, problem) => {
            if (err) {
                reject("ERROR: Cannot get problem from database - " + err);
            } else if (problem == null) {
                reject("ERROR: Cannot get problem from database, problem does not exist");
            } else {
                resolve(problem);
            }
        });
    });
}

const addNewProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({'title': newProblem.title}, (err, problem) => {
            if (problem) {
                reject("ERROR: Cannot add problem, problem exist already(duplicate title)");
            }
            ProblemModel.count((err, count) => {
                if (err) { reject("ERROR:" + err) };
                newProblem['id'] = count + 1;
                let newProblemDocument = new ProblemModel(newProblem);
                newProblemDocument.save((error, problem) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(problem);
                    }
                })
            });
        })
    });
}

module.exports = {
    getProblem,
    getProblems,
    addNewProblem
}