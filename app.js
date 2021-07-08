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
import seedQuizQuestions from "./seeders/quizQuestions/quizQuestions.js"
import cors from "cors"

dotenv.config();
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://staysecure.pl");
  res.header("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(bodyParser.json());
app.use(verifyToken);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

process.argv.map(arg => {
  if (arg === "seedCourses") seedCourses(); 
  if (arg === "seedQuizQuestions") seedQuizQuestions();
})

const port = process.env.PORT || 3000;

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log("Api listening on port: " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
