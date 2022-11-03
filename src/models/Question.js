const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    question: String,
    correct_answer: String,
    option: {
        1: String,
        2: String,
        3: String,
        4: String
    },
    difficulty: String,
})

module.exports = mongoose.model('Questions', QuestionSchema)