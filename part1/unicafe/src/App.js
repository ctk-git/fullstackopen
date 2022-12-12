import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Heading1 = ({text}) => <h1>{text}</h1>

const StatisticLine = ({text,value,text2}) => 
<tr>
<td> {text} </td>
<td>&nbsp;{value} {text2}</td>
</tr> 

// a proper place to define a component
const Statistics = (props) => {
    if(props.all === 0){
        return (
        <div>
        No feedback given
        </div>
     )
    }

  
  return (
  <table>
      <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive*100} text2="%" />
      </tbody>
  </table>
  )
  
  // ...
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
      setGood(good + 1)
      setAll(all+1)
      setAverage(((good+1)-bad)/(all+1))
      setPositive((good+1)/(all+1))

  }
  const handleNeutral = () => {
      setNeutral(neutral + 1)
      setAll(all+1)
      setAverage(((good)-bad)/(all+1))
      setPositive((good)/(all+1))

  }
  const handleBad = () => {
      setBad(bad + 1)
      setAll(all+1)
      setAverage(((good)-(bad+1))/(all+1))
      setPositive((good)/(all+1))

  }


  return (
    <div>
    <Heading1 text='give feedback' />
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
    <Heading1 text='statistics' />
    
    <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />

    

    </div>
  )
}

export default App