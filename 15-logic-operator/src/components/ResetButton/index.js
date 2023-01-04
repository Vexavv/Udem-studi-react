function ResetButton({reset}) {
    const buttonStyle = {backgroundColor: 'lightgreen'}
    return(
         ( <div>
            <button style={buttonStyle} onClick={reset}>Reset</button>
        </div>)
    )
}
export default ResetButton;