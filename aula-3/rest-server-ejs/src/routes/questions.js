const express = require('express');
const router = express.Router();

const QuestionsService = require('../services/QuestionsService');
const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/not-found');

const socketEmit = (request) => {
  const io = request.app.locals.io;
  io.emit('new question', {
    event: new Date()
  });
}

router.post('/', checkAuth, async (request, response) => {
  const question = await QuestionsService.add(request.body);
  socketEmit(request);
  response
    .status(201)
    .json(question);
});

router.get('/', checkAuth, async (request, response) => {
  const questions = await QuestionsService.getAll();
  questions && questions.length
    ? response.json(questions)
    : response.status(204).end();
});

router.get('/:questionId', async (request, response) => {
  const question = await QuestionsService.getById(request.params.questionId);
  question
    ? response.json(question)
    : notFound(request, response);
});

router.patch('/:questionId', async (request, response) => {
  const updatedQuestion = await QuestionsService.update(
    request.params.questionId,
    request.body
  );
  socketEmit(request);
  updatedQuestion
    ? response.json(updatedQuestion)
    : notFound(request, response);
});

router.delete('/:questionId', async (request, response) => {
  const isDeleted = await QuestionsService.delete(request.params.questionId);
  socketEmit(request);
  isDeleted
    ? response.end()
    : notFound(request, response)
});

module.exports = router;