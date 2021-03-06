import React, { useState } from "react";
import ReactDOM from "react-dom";

const MaxVote = (props) => {
  const maxVote = Math.max(...props.vote); //find the max vote
  let indexOfMax = props.vote.indexOf(maxVote); //find max vote's index

  if (maxVote === 0) {
    return <p>No votes</p>;
  }
  return (
    <p>
      {anecdotes[indexOfMax]} has {maxVote}
    </p>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
  // console.log(vote);
  const voteCount = (selected) => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  // const random = () => {
  //   for (let i = 1; i <= anecdotes.length; i++){
  //     console.log(anecdotes.length)
  //     let temp = Math.floor(Math.random() * anecdotes.length);
  //     if(temp === anecdotes[i - 1]){ continue }
  //     anecdotes.push(temp)
  //   }
  //     return
  //   }

  return (
    <div>
      <div>
        "{anecdotes[selected]}" has {vote[selected]} votes
      </div>

      <div>
        <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
          Next anecdotes
        </button>

        <button onClick={() => voteCount(selected)}>Vote</button>

        <h3>Anecdotes with most votes is</h3>
        <h5>
          <MaxVote vote={vote} anecdotes={anecdotes} />
        </h5>
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
