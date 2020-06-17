import React from "react";

const App = () => {
  const Course = ({ courses }) => <Content courses={courses} />;

  const Header = ({ name }) => <h1>{name}</h1>;

  const Part = ({ name, exercises }) => (
    <p>
      {name} {exercises}
    </p>
  );
  const Total = ({ parts }) => {
    const total = parts.reduce((total, part) => {
      // console.log("what is wrong with", total, part);
      return total + part.exercises;
    }, 0);
    return <h4>Total of {total} exercises</h4>;
  };

  const Content = ({ courses }) => {
    return (
      <>
        {courses.map((course) => (
          <div key={course.name}>
            <Header name={course.name} />
            {course.parts.map((part) => (
              <Part
                key={part.name}
                name={part.name}
                exercises={part.exercises}
              />
            ))}
            <Total parts={course.parts} />
          </div>
        ))}
      </>
    );
  };

  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return <Course courses={courses} />;
};

export default App;
