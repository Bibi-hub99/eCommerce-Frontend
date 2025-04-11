function ImageDisplayer(props){

    //component for displaying images and follows reusability structure props based
    return (
        <img src={props.imageURL} className={'relative bg-center'} style={{width:props.width,height:props.width,borderRadius:props.radius}}></img>
    )

}

export default ImageDisplayer