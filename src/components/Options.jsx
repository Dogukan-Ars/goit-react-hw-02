const Options = ({ onLeaveFeedback, onReset, total }) => {
    return (
        <>
            <button type="button" onClick={() => onLeaveFeedback("good")}>
                Good
            </button>
            <button type="button" onClick={() => onLeaveFeedback("neutral")}>
                Neutral
            </button>
            <button type="button" onClick={() => onLeaveFeedback("bad")}>
                Bad
            </button>

            {total > 0 &&
                <button onClick={onReset}>
                    Reset
                </button>
            }
        </>
    )
}

export default Options