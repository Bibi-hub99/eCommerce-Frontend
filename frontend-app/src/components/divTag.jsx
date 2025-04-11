function DivTag(props){

    return (
        <div className={'bg-white shadow-lg'}>
            {
                props.children
            }
        </div>
    )

}

export default DivTag