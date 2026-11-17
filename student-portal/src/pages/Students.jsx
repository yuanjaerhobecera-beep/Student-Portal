
import StudentCard from "../components/StudentCard";

function Students() {
  const students = [
    {
      name: "Juan Dela cross",
      studentNumber: "2026-001",
      course: "BSIT",
    },
    {
      name: "Maria rivera",
      studentNumber: "2026-002",
      course: "BSCS",
    },
    {
      name: "Pedro Reyis",
      studentNumber: "2026-003",
      course: "BSIT",
    },
    {
      name: "Ana kol",
      studentNumber: "2026-004",
      course: "BSIS",
    },
    {
      name: "Mark kimpay",
      studentNumber: "2026-005",
      course: "BSIT",
    },
    {
      name: "carlos jake bading",
      studentNumber: "2026-006",
      course: "BSCS",
    },
  ];

  return (
    <div className="container">
      <h1>STUDENTS</h1>

      <div className="card-grid">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
}

export default Students;
