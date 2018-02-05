let problems = [
    {
        id: 1,
        title: "Problem1",
        difficulty: "easy",
        description: "11111111"
    },
    {
        id: 2,
        title: "Problem2",
        difficulty: "median",
        description: "22222222222222"
    },
    {
        id: 3,
        title: "Problem3",
        difficulty: "hard",
        description: "33333333333333"
    }
]

const getProblems = function() {
    return problems;
}

const getProblem = function(id) {
    return problems.find(problem =>id === problem.id);
}

module.exports = {
    getProblem,
    getProblems
}