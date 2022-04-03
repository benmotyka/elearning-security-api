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
    checkIfCourseFinished(courseLink: String!): Course
    getQuizData(courseLink: String!): QuizData
    getQuizSummaryData(courseLink: String!): QuizSummaryData
    getCourseRating(courseLink: String!): CourseRate!
    getOverallQuizesData: OverallQuizesData
}

type RootMutation {
    register(email: String!, name: String!, password: String!, captchaToken: String!, accountLevel: String!, language: String!): Email
    confirmEmail(token: String!): Email
    resetPassword(oldPassword: String!, newPassword: String!, captchaToken: String!): Email
    changeAccountLevel(newAccountLevel: String!): AccountLevel!
    forgotPassword(email: String!, captchaToken: String!, language: String!): Email
    forgotPasswordChange(token: String!, password: String!, captchaToken: String!): Email
    addCourseToFinished(courseName: String!): Course
    addCourseToStarted(courseName: String!): Course
    restartCourseAndQuiz(courseName: String!): Course
    finishQuiz(courseLink: String!, userAnswers: String!): QuizScore
    rateCourse(courseName: String!, rate: Int!, comment: String, captchaToken: String!): Status
}

type QuizData {
    _id: ID!
    items: [QuizItem!]!
}

type QuizItem {
    question: LanguageType!
    answers: [QuizAnswer]!
}

type QuizSummaryItem {
    question: LanguageType!
    answers: [QuizSummaryAnswer]!
}


type QuizAnswer {
    text: LanguageType!
}

type QuizSummaryAnswer {
    text: LanguageType!
    isCorrect: Boolean!
}

type Status {
    resultStatus: String!
}


type QuizSummaryData {
    quizName: LanguageType
    userAnswers: String!
    scorePercentage: Float!
    quizData: [QuizSummaryItem!]!
    showRateButton: Boolean!
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
    header: LanguageType!
    description: LanguageType!
    link: String!
    difficulty: Int!
}

type LanguageType {
    pl: String
    en: String
}


type LanguageArrayType {
    pl: [String]!
    en: [String]!
}

type Article {
    _id: ID!
    header: String!
    description: String!
    link: String!
    language: String!
    categories: LanguageArrayType!
    urls: LanguageArrayType!
}

type AccountLevel {
    accountLevel: String
}

type CourseRate {
    averageRate: Float!
    votes: Int!
    comments: [CourseComment]!
}

type CourseComment {
    username: String!
    comment: String!
    createdAt: String! 
}

type OverallQuizesData {
    overallScore: [ChartValue]
    finishedQuizes: [QuizSummaryShort]
}

type ChartValue {
    value: Float!
}

type QuizSummaryShort {
    scorePercentage: Int!
    header: LanguageType!
    link: String!
}
`);
