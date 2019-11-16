import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
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
        {props.part} {props.exercise}
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
  const part1 = "Fundamentals of React";
  const exercise1 = 10;
  const part2 = "Using props to pass data";
  const exercise2 = 7;
  const part3 = "State of a component";
  const exercise3 = 14;
  const exercises = exercise1 + exercise2 + exercise3;

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={exercise1} />
      <Content part={part2} exercise={exercise2} />
      <Content part={part3} exercise={exercise3} />
      <Total exercises={exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
