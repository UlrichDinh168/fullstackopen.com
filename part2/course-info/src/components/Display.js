import React from "react";

import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const Display = ({ courses }) => {
  return (
    <>
      {courses.map(course => (
        <div key={course.name}>
          <Header name={course.name} />
          {course.parts.map(part => (
            <Part name={part.name} exercises={part.exercises} key={part.name} />
          ))}
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Display;