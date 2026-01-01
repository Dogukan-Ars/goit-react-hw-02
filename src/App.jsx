import './App.css'
import Description from './components/Description'
import Options from './components/Options'
import Feedback from './components/Feedback'
import { useState } from 'react';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(initialFeedback);

  const total = feedback.good + feedback.neutral + feedback.bad;

  const handleFeedback = (option) => {
    setFeedback((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }))
  }

  const handleReset = () => {
    setFeedback(initialFeedback)
  }

  return (
    <>
      <Description />
      <Options onLeaveFeedback={handleFeedback} onReset={handleReset} total={total} />
      <Feedback feedback={feedback} />
    </>
  )
}

export default App
