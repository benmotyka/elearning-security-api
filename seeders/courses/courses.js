import Course from "../../models/course.js";
import { coursesData } from "./courses.data.js";

const seedCourses = async () => {
  console.log("Seeding courses!")
  coursesData.map(async (course) => {
    try {
      const newCourse = await new Course({
        header: course.header,
        description: course.description,
        link: course.link,
        difficulty: course.difficulty,
      }).save();
      console.log(`${newCourse.link} course added!`);
    } catch (error) {
      console.log(error);
    }
  });
};

export default seedCourses;
