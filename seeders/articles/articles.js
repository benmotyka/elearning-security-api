import Article from "../../models/article.js";
import { articlesData } from "./articles.data.js";

const seedArticles = () => {
  Article.collection.drop();
  console.log("Seeding articles!");
  articlesData.map(async (article) => {
    try {
      const newArticle = await new Article({
        header: article.header,
        description: article.description,
        link: article.link,
        language: article.language,
      }).save();
      console.log(`${newArticle.header} article added!`);
    } catch (error) {
      console.log(error);
    }
  });
};

export default seedArticles;
