const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    difficulty: String
});

const ProblemModel = mongoose.model('ProblemModel', problemSchema);

module.exports = ProblemModel;