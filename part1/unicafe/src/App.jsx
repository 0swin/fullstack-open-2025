import { useState } from 'react'

const Button = (props) => {
  return (
    <button type="button" onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  var total = good + neutral + bad
  var average = ((good * 1) + (bad * -1))/total
  var positive = good / total * 100 + "%"
  
  return (
    <div>
      <h1>Statistics</h1>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticsLine text="good" value={good}/>
            <StatisticsLine text="neutral" value={neutral}/>
            <StatisticsLine text="bad" value={bad}/>
            <StatisticsLine text="all" value={total}/>
            <StatisticsLine text="average" value={average}/>
            <StatisticsLine text="positive" value={positive}/>
          </tbody>
        </table>
      )}
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give geedback</h1>
      <Button onClick={incrementGood} text="good"></Button>
      <Button onClick={incrementNeutral} text="neutral"></Button>
      <Button onClick={incrementBad} text="bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App