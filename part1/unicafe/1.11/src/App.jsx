import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood((state) => state + 1);
  const handleNeutralClick = () => setNeutral((state) => state + 1);
  const handleBadClick = () => setBad((state) => state + 1);

  const Button = ({ text, handleCallback }) => {
    return <button onClick={handleCallback}>{text}</button>;
  };

  const StatisticLine = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  };

  const Statistics = (props) => {
    const { good, neutral, bad } = props;
    const all = good + neutral + bad;
    const average = (good * 1 + neutral * 0 + bad * -1) / all;
    const positive = `${(good / all) * 100 || 0} %`;

    return (
      <div>
        {all ? (
          <table>
            <tbody>
              <StatisticLine
                text="good"
                value={props.good}
              />
              <StatisticLine
                text="neutral"
                value={props.neutral}
              />
              <StatisticLine
                text="bad"
                value={props.bad}
              />
              <StatisticLine
                text="all"
                value={all}
              />
              <StatisticLine
                text="average"
                value={average}
              />
              <StatisticLine
                text="positive"
                value={positive}
              />
            </tbody>
          </table>
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
        <Button
          text="good"
          handleCallback={handleGoodClick}
        />
        <Button
          text="neutral"
          handleCallback={handleNeutralClick}
        />
        <Button
          text="bad"
          handleCallback={handleBadClick}
        />
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
