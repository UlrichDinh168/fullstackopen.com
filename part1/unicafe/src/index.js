import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ feedback, content }) => (
  <button onClick={feedback}>{content}</button>
);

const Statistics = ({ content, value }) => {
  return (
    <tr>
      <td>{content}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (total / 3).toFixed(2);
  const positive = ((good / total) * 100).toFixed(2) + "%";

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button feedback={() => setGood(good + 1)} content="Good" />
      <Button feedback={() => setNeutral(neutral + 1)} content="Neurtal" />
      <Button feedback={() => setBad(bad + 1)} content="Bad" />
      

      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback is given</p>
      ) : (
        <table>
          <tbody>
            <Statistics content="Good" value={good} />
            <Statistics content="Neutral" value={neutral} />
            <Statistics content="Neutral" value={bad} />
            <Statistics content="All" value={total} />
            <Statistics content="Average" value={average} />
            <Statistics content="Positive" value={positive} />
          </tbody>
        </table>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
