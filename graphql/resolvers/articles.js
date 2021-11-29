import Article from "../../models/article.js"

export default {
    articles: async (args) => {
        const articles = await Article.find({
            language: args.language
        });
        let response = articles.map(article => ({...article._doc}));
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
    const article = await Article.findOne({link: args.link})
    if (!article) {
        throw new Error("article-not-found");
      }
    return (article._doc)
    }
}