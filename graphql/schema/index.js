import pkg from "graphql";
const { buildSchema } = pkg;

export default buildSchema(`

schema {
    query: RootQuery
    mutation: RootMutation
}

type RootQuery {
    login(userInput: UserInput): LoginData
    article(link: String!): Article!
    articles(quantity: Int, random: Boolean): [Article!]!
    courses(quantity: Int): [Course!]!

    checkIfCourseFinished(courseName: String!): Course
    getQuizQuestions(courseName: String!):  [QuizQuestion!]!
}

type RootMutation {
    register(email: String!, name: String!, password: String!, captchaToken: String!): Email
    confirmEmail(token: String!): Email
    resetPassword(oldPassword: String!, newPassword: String!, captchaToken: String!): Email

    forgotPassword(email: String!, captchaToken: String!): Email
    forgotPasswordChange(token: String!, password: String!, captchaToken: String!): Email
    updateUserCourses(courseName: String!): Course
    finishQuiz(courseName: String!, userAnswers: String!): QuizScore
}

type Id {
    _id: ID!
}
type CourseLink {
    link: String
}

type LoginData {
    userId: ID!
    token: String!
    tokenExpiration: Int
    name: String
}

type CourseID {
    _id: ID!
}

type AccountData {
    email: String!
    createdAt: String!
}

type Email { 
    email: String!
}

type QuizScore {
    correctAnswers: Int!
    numberOfQuestions: Int!
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
    rememberMe: Boolean!
}

type Course {
    _id: ID!
    header: String!
    description: String!
    link: String!
    difficulty: Int!
}

type Article {
    _id: ID!
    header: String!
    description: String!
    link: String!
}

type QuizQuestion {
    _id: ID!
    course: ID!
    question: String!
    answers: [String!]!
    correctAnswerIndex: Int
}
`);
