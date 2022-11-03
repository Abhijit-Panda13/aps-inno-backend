const express = require('express')
const router = express.Router()
const Question = require('./models/Question')

// get all quiz questions
router.get('/Questions', async (req, res) => {
    try {
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

module.exports = router