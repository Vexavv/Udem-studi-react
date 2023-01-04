import courses from '../data/courses'
import {Link} from "react-router-dom";

function Courses(props) {
    return (
        <>
            <h1>Courses</h1>
            {courses.map((course) =>(
                <div key={course.id}>
                    <Link className="courseLink"  to={course.slug} >{course.title}</Link>
                </div>

                ))}
        </>


    );
}

export default Courses;