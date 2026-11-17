
function CourseCard({ name, code, description }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{code}</p>
      <p>{description}</p>
    </div>
  );
}

export default CourseCard;
