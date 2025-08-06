import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Display = (props) => <p>{props.value}</p>;
const DisplayH2 = (props) => <h2>{props.value}</h2>;
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const anecdotesLength = anecdotes.length;

  const [voted, setVoted] = useState(() => {
    const votes = {};
    for (let i = 0; i < anecdotesLength; i++) {
      votes[i] = 0;
    }
    return votes
  });
  //console.log("lo votado")
  //console.log(voted)
  const [votado, setMostVotado] = useState(0);
  

  const handleRandomNumber = () => {
    setSelected(Math.floor(Math.random() * anecdotesLength));
  };

  const handleVotes = () => {
    const newVotes = { ...voted };
    newVotes[selected] += 1;
    setVoted(newVotes);
  };

  //console.log(" los votos")
  console.log(voted)
  //determinar el más votado con reduce
  const handleMostVoted = 
    +Object.keys(voted).reduce((a, b) =>
      voted[a] > voted[b] ? a : b
    )


  return (
    <div>
      <DisplayH2 value={"Anecdote of the day"}/>
      <p>{anecdotes[selected]}</p>
      <Display value={"has " + voted[selected] + " votes"} />
      <Button text="vote" onClick={handleVotes} />
      <Button text="changequote" onClick={handleRandomNumber} />
      <DisplayH2 value={"Anecdote with most votes"}/>
      <Display value={anecdotes[handleMostVoted]}/>
      <Display value={"has " + voted[handleMostVoted] + " votes"}/>
    </div>
  );
};

export default App;
