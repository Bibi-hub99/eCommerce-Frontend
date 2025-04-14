function DivTag(props){

    return (
        <div className={'bg-white shadow-lg'} style={props.divStyle}>
            {
                props.children
            }
        </div>
    )

}

export default DivTag