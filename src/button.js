
function Button({onClick,name}){

    const handleSubmitNext = () => {
        onClick(name)
    }

    return <button onClick={handleSubmitNext}>click</button>
}

export default Button;