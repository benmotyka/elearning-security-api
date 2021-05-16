import authResolver from "./auth.js"
import accountResolver from "./account.js"

export default {
    ...authResolver,
    ...accountResolver
}