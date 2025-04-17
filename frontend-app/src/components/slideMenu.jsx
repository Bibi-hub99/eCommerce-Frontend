import Button from './rawButton'
import {useMyContext} from '../contextAPI'

function SlideMenu(props){

    const {closeIcon} = useMyContext()

    return (
        <div className={`fixed top-0 bg-white shadow-gray-300 shadow-xl h-[100%] md:hidden  transition duration-[5s] overflow-x-hidden pt-16`} style={{zIndex:'20',width:props.width}}>
            <div>
                <div className={'absolute right-2 top-2 py-1 rounded-lg px-3 hover:bg-gray-200'}>
                    <Button
                    innerText={closeIcon}
                    fontSize={'2rem'}
                    type={'button'}
                    handleClick={props.handleClick}
                    />
                </div>
                <div>
                    {props.indexLink}
                    {props.navLinks}
                </div>
            </div>
        </div>
    )

}

export default SlideMenu