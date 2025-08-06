import { useState } from "react";
const StatisticLine = (props) => {
  return (
    <tr>
  <td>{props.text}</td>
  <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const averageToShow =
    props.allClicks === 0 ? 0 : (props.good - props.bad) / props.allClicks;
  const positiveClicks =
    props.allClicks === 0 ? 0 : (props.good * 100) / props.allClicks;

  if (props.allClicks === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.allClicks} />
          <StatisticLine text="average" value={averageToShow} />
          <StatisticLine text="positive" value={positiveClicks} />
        </tbody>
      </table>
    );
  }
};

const Display = (props) => <h2>{props.value}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setClicks] = useState(0);

  const handleGoodClicks = () => {
    setGood(good + 1);
    setClicks(allClicks + 1);
  };

  const handleNeutralClicks = () => {
    setNeutral(neutral + 1);
    setClicks(allClicks + 1);
  };

  const handleBadClicks = () => {
    setBad(bad + 1);
    setClicks(allClicks + 1);
  };

  return (
    <div>
      <Display value={"give feedback"} />
      <table>
        <tbody>
          <tr>
            <th>
              <Button text="good" onClick={handleGoodClicks}></Button>
            </th>
            <th>
              <Button text="neutral" onClick={handleNeutralClicks}></Button>
            </th>
            <th>
              <Button text="bad" onClick={handleBadClicks}></Button>
            </th>
          </tr>
        </tbody>
      </table>
      <Display value={"statistics"} />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        allClicks={allClicks}
      />
    </div>
  );
};

export default App;
