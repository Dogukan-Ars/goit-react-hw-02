import styles from './Description.module.css'

const Description = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Sip Happens Café</h2>
            <p className={styles.description}>
                Please leave your feedback about our service by selecting one of the options below.
            </p>
        </div>
    )
}

export default Description