const Options = () => {
    const options = ['Good', 'Neutral', 'Bad']
    return (
        <>
            {options.map(option => (
                <button key={option} type="button">
                    {option}
                </button>
            ))}
        </>
    )
}

export default Options