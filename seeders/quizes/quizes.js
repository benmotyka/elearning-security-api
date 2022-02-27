import Quiz from "../../models/quiz.js";
import Course from "../../models/course.js"
import {quizesData} from './quizes.data.js'

const seedQuizes = async () => {
    console.log("Seeding quizes!")
    quizesData.map(async (quiz) => {
      try {
        const course = await Course.findOne({ link: quiz.courseLink });

        const newQuiz = await new Quiz({
          courseId: course._id,
          items: quiz.items
        }).save();
        console.log(`${quiz.courseLink} quiz added!`);
      } catch (error) {
        console.log(error);
      }
    });
  };
  
  export default seedQuizes;