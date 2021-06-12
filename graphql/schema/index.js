import pkg from 'graphql';
const {buildSchema} = pkg;


export default buildSchema(`

schema {
    query: RootQuery
    mutation: RootMutation
}

type RootQuery {
    loginUser(userInput: UserInput): LoginData
    coursesPreview: [Course!]!
    getAccountInfo: AccountData!
}

type RootMutation {
    registerUser(userInput: UserInput): User
    resetPassword(oldPassword: String!, newPassword: String!, captchaToken: String!): UserEmail
    confirmEmail(token: String!): UserEmail
    forgotPassword(email: String!, captchaToken: String!): UserEmail
    forgotPasswordChange(token: String!, password: String!, captchaToken: String!): UserEmail
    updateUserCourses(courseName: String!): CourseID
}

type LoginData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

type CourseID {
    _id: ID!
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

type Course {
    _id: ID!
    title: String!
    brief: String!
    description: String!
    link: String!
    difficulty: Int!
    rating: Int
}
`)