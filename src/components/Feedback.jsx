const Feedback = ({ feedback }) => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    const positive = total > 0 ? Math.round((good / total) * 100) : 0;

    if (total === 0) {
        return <p>No feedback yet.</p>;
    }

    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
        </>
    )
}

export default Feedback