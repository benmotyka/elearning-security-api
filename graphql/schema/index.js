import pkg from 'graphql';
const {buildSchema} = pkg;


export default buildSchema(`

schema {
    query: RootQuery
    mutation: RootMutation
}

type RootQuery {
    loginUser(email: String!, password: String!): LoginData
    modules: [Module!]!
}

type RootMutation {
    registerUser(userInput: UserInput): User
}

type LoginData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

type User {
    _id: ID!
    email: String!
    password: String
}

input UserInput {
    email: String!
    password: String!
}

type Module {
    _id: ID!
    index: Float!
    title: String!
    description: String!
    difficulty: Float!
}
`)