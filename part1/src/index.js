import React from "react";
import ReactDOM from "react-dom";

const course = "Half Stack application development";
const part1 = "Fundamentals of React";
const exercise1 = 10;
const part2 = "Using props to pass data";
const exercise2 = 7;
const part3 = "State of a component";
const exercise3 = 14;
const exercises = exercise1 + exercise2 + exercise3;

const Header = props => {
  return (
    <div>
      <p>
        <h1>{props.course}</h1>
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Part part = {part1} exercise = {exercise1}/>
			<Part part = {part2} exercise = {exercise2}/>
			<Part part = {part3} exercise = {exercise3}/>
    </div>
  );
};

const Part = props => {
	return (
		<p>{props.part} {props.exercise}</p>
	)
}

const Total = props => {
  return (
    <div>
      <p>You have participated in {props.exercises} exercises.</p>
    </div>
  );
};

const App = () => {

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises={exercises} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
