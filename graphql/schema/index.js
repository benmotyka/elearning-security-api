import pkg from 'graphql';
const {buildSchema} = pkg;


export default buildSchema(`

schema {
    query: RootQuery
    mutation: RootMutation
}

type RootQuery {
    loginUser(userInput: UserInput): LoginData
    modules: [Module!]!
    getAccountInfo: AccountData!
}

type RootMutation {
    registerUser(userInput: UserInput): User
    resetPassword(oldPassword: String!, newPassword: String!, captchaToken: String!): UserEmail
    confirmEmail(token: String!): UserEmail
    forgotPassword(email: String!, captchaToken: String!): UserEmail
    forgotPasswordChange(token: String!, password: String!, captchaToken: String!): UserEmail
}

type LoginData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

type AccountData {
    email: String!
    createdAt: String!
}

type UserEmail { 
    email: String!
}

type User {
    _id: ID!
    email: String!
    password: String
}

input UserInput {
    email: String!
    password: String!
    captchaToken: String!
}

type Module {
    _id: ID!
    index: Float!
    title: String!
    description: String!
    difficulty: Float!
}
`)