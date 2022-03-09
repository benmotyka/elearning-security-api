import Article from "../../models/article.js"
import loggerConfig from "../../config/logger.js"
const logger = loggerConfig({label: 'courses-resolver'})

export default {
    articles: async (args) => {
        const lang = args.language
        const articles = await Article.find();
        logger.info(`Fetching articles of lang: ${lang}`)

        let response = articles.map(article => ({...article._doc, description: article.description[lang], header: article.header[lang]}));
        if (args.random) {
            const randomArticles = []
            response.forEach(article => {
                const potentialArticle = response[Math.floor(Math.random() * response.length)]
                if(!randomArticles.includes(potentialArticle)) randomArticles.push(potentialArticle)
            })
            response = randomArticles;
        }
        if (args.quantity) return response.slice(0, args.quantity)
        return response
    },
    article: async (args) => {
        const lang = args.language
        const article = await Article.findOne({link: args.link})
        logger.info(`Fetching one specific article: ${args.link} of lang: ${lang}`)

        if (!article) {
            throw new Error("article-not-found");
        }
        return ({...article._doc, description: article.description[lang], header: article.header[lang]})
    }
}