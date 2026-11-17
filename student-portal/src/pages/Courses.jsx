
import CourseCard from "../components/CourseCard";

function Courses() {
  const courses = [
    {
      name: "Information Technology",
      code: "BSIT",
      description: "Study of computer technology.",
    },
    {
      name: "Computer Science",
      code: "BSCS",
      description: "Study of computing and programming.",
    },
    {
      name: "Information Systems",
      code: "BSIS",
      description: "Study of technology and business.",
    },
    {
      name: "Computer Engineering",
      code: "BSCpE",
      description: "Study of computer hardware and software.",
    },
    {
      name: "Accountancy",
      code: "BSA",
      description: "Study of accounting and finance.",
    },
    {
      name: "Education",
      code: "BSED",
      description: "Study of teaching and learning.",
    },
  ];

  return (
    <div className="container">
      <h1>COURSES</h1>

      <div className="card-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
