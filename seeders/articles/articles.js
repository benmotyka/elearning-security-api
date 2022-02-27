import Article from "../../models/article.js";
import { articlesData } from "./articles.data.js";

const seedArticles = async () => {
  console.log("Seeding articles!");
  articlesData.map(async (article) => {
    try {
      const newArticle = await new Article({
        header: article.header,
        description: article.description,
        link: article.link,
      }).save();
      console.log(`${newArticle.link} article added!`);
    } catch (error) {
      console.log(error);
    }
  });
};

export default seedArticles;
