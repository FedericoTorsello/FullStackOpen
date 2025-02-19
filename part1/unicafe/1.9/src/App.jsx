import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood((state) => state + 1);
  const handleNeutralClick = () => setNeutral((state) => state + 1);
  const handleBadClick = () => setBad((state) => state + 1);

  const Statistics = (props) => {
    const { good, neutral, bad } = props;
    const all = good + neutral + bad;
    const average = (good * 1 + neutral * 0 + bad * -1) / all;
    const positive = `${(good / all) * 100 || 0} %`;

    return (
      <div>
        {all ? (
          <>
            <p>good {props.good}</p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}</p>
          </>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      ></Statistics>
    </div>
  );
};

export default App;
