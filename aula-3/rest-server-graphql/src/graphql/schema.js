const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type SlimQuery {
        number: String!
        description: String
    }

    type Query {
        slim: SlimQuery!
    }

    type Option {
        _id: ID!
        option: String!
    }

    type Question {
        _id: ID!
        number: String!
        description: String!
        status: String!
        options: [Option!]
    }

    type Response {
        question: Question
        error: String
    }

    input QuestionInput {
        number: String!
        description: String!
        status: String = new2
        options: [String!]
    }
    
    type Mutation {
        createQuestion(questionInput: QuestionInput) : Response!
    }

    schema {
        query: Query
        mutation: Mutation
    }
`);