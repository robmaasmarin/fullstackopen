const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p><strong>Total of exercises: {totalExercises}</strong></p>;
};

const Part = ({ name, exercises}) => {
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};

const Course = (props) => {
  const courses = props.courses;

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.name}</h2>

          {course.parts.map((part) => (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
          ))}
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};


export default Course;

