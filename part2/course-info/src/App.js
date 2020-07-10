import React from "react";
import Course from "./components/Course";

// const App = () => {
//   const Header = ({ name }) => <h1>{name}</h1>;

//   const Part = ({ name, exercises }) => (
//     <p>
//       {name} {exercises}
//     </p>
//   );

//   const Total = ({ parts }) => {
//     const total = parts.reduce((total, part) => total + part.exercises, 0);
//     return <h4>There are {total} exercises in total</h4>;
//   };

//   const Display = ({ courses }) => {
//     return (
//       <>
//         {courses.map((course) => (
//           <div key={course.name}>
//             <Header name={course.name} />

//             {course.parts.map((
//               part //notes
//             ) => (
//               <Part
//                 key={part.name}
//                 name={part.name}
//                 exercises={part.exercises}
//               />
//             ))}

//             <Total parts={course.parts} />
//           </div>
//         ))}
//       </>
//     );
//   };

//   const Courses = ({ courses }) => <Display courses={courses} />;

//   const courses = [
//     {
//       name: "Half Stack application development",
//       id: 1,
//       parts: [
//         {
//           name: "Fundamentals of React",
//           exercises: 10,
//           id: 1,
//         },
//         {
//           name: "Using props to pass data",
//           exercises: 7,
//           id: 2,
//         },
//         {
//           name: "State of a component",
//           exercises: 14,
//           id: 3,
//         },
//         {
//           name: "Redux",
//           exercises: 11,
//           id: 4,
//         },
//       ],
//     },
//     {
//       name: "Node.js",
//       id: 2,
//       parts: [
//         {
//           name: "Routing",
//           exercises: 3,
//           id: 1,
//         },
//         {
//           name: "Middlewares",
//           exercises: 7,
//           id: 2,
//         },
//       ],
//     },
//   ];

//   return <Courses courses={courses} />;
// };

// export default App;

const App = ({courses}) => {
  return <Course courses={courses} />;
};

export default App;
