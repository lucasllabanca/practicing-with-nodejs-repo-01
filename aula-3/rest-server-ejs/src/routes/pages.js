const express = require('express');
const router = express.Router();

const QuestionsService = require('../services/QuestionsService');
const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, async (req, res) => {
  let questions = await QuestionsService.getAll();
  //questions = questions.sort((a, b) => { a._id - b._id }).filter(question => question.status == 'public');
  //const question = questions && questions.length ? questions[0] : undefined;
  res.render('questions', { name: req.body.name, questions: questions });
})
router.get('/', (req, res) => {
  res.render('index', { title: 'Início' });
})
router.get('/about', (req, res) => {
  res.render('about', { title: 'Sobre' });
})

module.exports = router;