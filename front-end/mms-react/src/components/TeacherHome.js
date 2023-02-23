const TeacherHome = () => {
  const student1 = localStorage.getItem("students");
  const student2 = JSON.parse(student1);
  return (
    <div>
      {student2.map((ele) => {
        return (
          <>
            <p>{ele.name}</p>
          </>
        );
      })}
    </div>
  );
};
export default TeacherHome;
