import authResolver from "./auth.js"
import accountResolver from "./account.js"
import coursesResolver from "./courses.js"
import quizResolver from "./quiz.js"
import articlesResolver from "./articles.js"
export default {
    ...authResolver,
    ...accountResolver,
    ...coursesResolver,
    ...quizResolver,
    ...articlesResolver
}