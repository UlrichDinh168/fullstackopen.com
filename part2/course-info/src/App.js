import React from "react";

const App = () => {
  const Course = (props) => {
    return (
      <div>
        <Header course={props.course} />
        <Content course={props.course} />
        <Total course={props.course} />
      </div>
    );
  };
  const Header = ({ name }) => <h1>{name}</h1>;

  const Part = ({ name, exercises }) => (
    <p>
      {name} {exercises}
    </p>
  );

  const Total = ({ parts }) => {
    const total = parts.reduce((total, part) => total + part.exercises, 0);
    return <p>There are {total} exercises in total</p>;
  };

  const Content = ({ courses }) => {
    const Display = () =>
      courses.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ));

    return <div>{Display}</div>;
  };

  return <Course courses={courses} />;
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

export default App;
