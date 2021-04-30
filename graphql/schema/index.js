import pkg from 'graphql';
const {buildSchema} = pkg;


export default buildSchema(`

schema {
    query: RootQuery
    mutation: RootMutation
}

type RootQuery {
    loginUser(email: String!, password: String!): LoginData!
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
`)