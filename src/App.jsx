import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import { useEffect, useState } from 'react';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');

    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    }

    return initialFeedback;
  });

  const total = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback])

  const handleFeedback = (option) => {
    setFeedback((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }))
  }

  const handleReset = () => {
    setFeedback(initialFeedback)
    localStorage.removeItem('feedback');
  }

  return (
    <>
      <Description />
      <Options
        onLeaveFeedback={handleFeedback}
        onReset={handleReset}
        total={total}
      />
      <Feedback feedback={feedback} />
    </>
  )
}

export default App
