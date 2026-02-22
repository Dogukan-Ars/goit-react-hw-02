import styles from './Feedback.module.css';

const Feedback = ({ feedback }) => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    const positive = total > 0 ? Math.round((good / total) * 100) : 0;

    if (total === 0) {
        return <p className={styles.noFeedback}>No feedback yet.</p>;
    }

    return (
        <ul className={styles.feedbackList}>
            <li className={styles.feedbackItem}>Good: {good}</li>
            <li className={styles.feedbackItem}>Neutral: {neutral}</li>
            <li className={styles.feedbackItem}>Bad: {bad}</li>
            <li className={styles.feedbackItem}>Total: {total}</li>
            <li className={styles.feedbackItem}>Positive: {positive}%</li>
        </ul>
    )
}

export default Feedback