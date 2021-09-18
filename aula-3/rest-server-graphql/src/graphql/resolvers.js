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
                    return {error: `Question ${number} already exists!`};
                    //throw new Error('Question already exists!');
                }
                const newQuestion = {
                    number : questionInput.number,
                    description : questionInput.description,
                    status : questionInput.status || 'new2',
                    options : questionInput.options
                }
                return {question: new Question(newQuestion).save()};
            })
            .catch(err => resolve(err));
    }
};