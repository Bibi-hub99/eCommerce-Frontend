function Button(props){
    return (
        <button style={{cursor:'pointer',
            fontSize:props.fontSize,
            backgroundColor:props.bgColor,
            color:props.color,
            padding:props.padding,
            border:props.border,
            display:props.display
        }}>{props.innerText}</button>
    )
}

export default Button