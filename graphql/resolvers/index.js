import authResolver from "./auth.js"
import accountResolver from "./account.js"
import coursesResolver from "./courses.js"
export default {
    ...authResolver,
    ...accountResolver,
    ...coursesResolver
}