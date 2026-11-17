
function StudentCard({ name, studentNumber, course }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Student No: {studentNumber}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default StudentCard;
