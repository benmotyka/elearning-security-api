import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pkg from "express-graphql";
const { graphqlHTTP } = pkg;
import connectDatabase from "./config/database.js";
import graphqlSchema from "./graphql/schema/index.js";
import graphqlResolvers from "./graphql/resolvers/index.js";
import verifyToken from "./middleware/verifyToken.js";

import seedCourses from "./seeders/courses/courses.js"
import cors from "cors"
import http from "http"
import seedArticles from "./seeders/articles/articles.js";
import seedQuizes from "./seeders/quizes/quizes.js";
dotenv.config();
const app = express();

const corsOptions = {
  origin: process.env.WEBSITE_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(verifyToken);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
  })
);

process.argv.map(arg => {
  if (arg === "seedCourses") seedCourses(); 
  if (arg === "seedArticles") seedArticles();
  if (arg === "seedQuizes") seedQuizes();
})

const port = process.env.PORT || 3000;

connectDatabase()
  .then(() => {
    http.createServer(app).listen(port, () => {
      console.log("Api listening on port: " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
