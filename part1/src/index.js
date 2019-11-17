import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <div>
      <p>
        <h1>{props.course}</h1>
      </p>
    </div>
  );
};

const Content = props => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Total = props => {
  return (
    <div>
      <p>You have participated in {props.exercises} exercises.</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content part={part1.name} exercises={part1.exercises} />
      <Content part={part2.name} exercises={part2.exercises} />
      <Content part={part3.name} exercises={part3.exercises} />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
