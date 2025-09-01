const Course = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log(total);
  

  return (
    <div>
      <div>
        <h1>{course.name}</h1>
      </div>
      <div>
        { course.parts.map(part => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
        ))}
        <b>total of {total} exercises</b>
      </div>
    </div>
  )
}

export default Course