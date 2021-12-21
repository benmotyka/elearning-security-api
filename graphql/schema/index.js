import pkg from "graphql";
const { buildSchema } = pkg;

export default buildSchema(`

schema {
    query: RootQuery
    mutation: RootMutation
}

type RootQuery {
    login(userInput: UserInput): LoginData
    article(link: String!, language: String): Article!
    articles(quantity: Int, language: String, random: Boolean): [Article!]!
    courses(quantity: Int, language: String): [Course!]!
    getUserInfo: User!
    checkIfCourseFinished(courseName: String!): Course
}

type RootMutation {
    register(email: String!, name: String!, password: String!, captchaToken: String!, accountLevel: String!): Email
    confirmEmail(token: String!): Email
    resetPassword(oldPassword: String!, newPassword: String!, captchaToken: String!): Email
    changeAccountLevel(newAccountLevel: String!): AccountLevel!
    forgotPassword(email: String!, captchaToken: String!): Email
    forgotPasswordChange(token: String!, password: String!, captchaToken: String!): Email
    addCourseToFinished(courseName: String!): Course
    addCourseToStarted(courseName: String!): Course
    restartCourse(courseName: String!): Course
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
    accountLevel: String!
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
    coursesFinished: [CourseMultiLang!]
    coursesStarted: [CourseMultiLang!]
    email: String!
    name: String!
    accountLevel: String!
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

type CourseMultiLang {
    _id: ID!
    header: Language!
    description: Language!
    link: String!
    difficulty: Int!
}

type Language {
    pl: String
    en: String
}

type Article {
    _id: ID!
    header: String!
    description: String!
    link: String!
    language: String!
}

type AccountLevel {
    accountLevel: String
}
`);
