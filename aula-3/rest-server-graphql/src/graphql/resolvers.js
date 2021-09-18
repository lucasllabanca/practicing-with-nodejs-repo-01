const Question = require('../models/question');
module.exports = {
    slim() {
        return {
            number: '10',
            description: 'descr'
        };
    },
    createQuestion({ questionInput }, req) {
        const number = questionInput.number;
        return Question.findOne({ number: number })
            .then(existingQuestion => {
                if (existingQuestion) {
                    throw new Error('Question already exists!');
                }
                const newQuestion = {
                    number : questionInput.number,
                    description : questionInput.description,
                    status : questionInput.status || 'new2',
                    options : questionInput.options
                }
                return new Question(newQuestion);
            })
            .then(newQuestion => {
                return newQuestion.save();
            })
            .catch(err => resolve(err));
    }
};