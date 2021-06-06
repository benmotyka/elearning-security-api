import Course from "../../models/course.js"
import {coursesData} from "./courses.data.js"

export default coursesData.map(async course => {
    try {
        const newCourse = await new Course({
            title: course.title,
            brief: course.brief,
            description: course.description,
            link: course.link,
            difficulty: course.difficulty 
        }).save()
        console.log(`${newCourse.title} added!`)
    } catch (error) {
        console.log(error);
    }

})
