import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Heading1 = ({text}) => <h1>{text}</h1>

const PrintStats = ({text,value}) => <div>{text} {value} </div> 

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
      <div>
      good {props.good}
      <br/>
      neutral {props.neutral}
      <br/>
      bad {props.bad}
      <br/>
      all {props.all}
      <br/>
      average {props.average}
      <br/>
      positive {props.positive*100.0} %
      </div>
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