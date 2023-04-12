
function Button({onClick,name,text}){

    const handleSubmitNext = () => {
        onClick(name)
    }

    return <button onClick={handleSubmitNext}>{text}</button>
}

export default Button;