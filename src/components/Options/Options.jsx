import styles from './Options.module.css'

const Options = ({ onLeaveFeedback, onReset, total }) => {
    return (
        <ul className={styles.optionsList}>
            <li className={styles.optionItem}>

                <button type="button" onClick={() => onLeaveFeedback("good")} className={styles.optionButton}>
                    Good
                </button>
            </li>
            <li className={styles.optionItem}>
                <button type="button" onClick={() => onLeaveFeedback("neutral")} className={styles.optionButton}>
                    Neutral
                </button>
            </li>
            <li className={styles.optionItem}>
                <button type="button" onClick={() => onLeaveFeedback("bad")} className={styles.optionButton}>
                    Bad
                </button>
            </li>
            <li className={styles.optionItem}>
                {total > 0 &&
                    <button onClick={onReset} className={styles.resetButton}>
                        Reset
                    </button>
                }
            </li>
        </ul>
    )
}

export default Options