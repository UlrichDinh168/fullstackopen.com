import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };

  const Content = (props) => {
    return (
      <p>
        The name of this part is {props.part} and it has {props.exercises}{" "}
        exercises
      </p>
    );
  };

  const Total = (props) => {
    return (
      <p>
        The total number of exercises are {exercises1 + exercises2 + exercises3}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />

      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />

      <Total />
    <div/>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
