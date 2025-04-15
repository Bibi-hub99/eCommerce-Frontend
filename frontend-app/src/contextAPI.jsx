import {createContext,useContext} from 'react'
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";


const MyContext = createContext()

export function useMyContext(){

    return useContext(MyContext)

}

const contextValue = {
    loggingLinks:[
        {
            id:1,
            title:'Log in',
            url:'log-in'
        },
        {
            id:2,
            title:'Sign up',
            url:'sign-up'
        }
    ],
    navLinks:[
        {
            id:1,
            title:<MdFavorite/>,
            url:'favorites'
        },
        {
            id:2,
            title:<FaCartPlus/>,
            url:'cart'
        },
        {
            id:3,
            title:<IoMdNotifications/>,
            url:'notifications'
        },
        {
            id:4,
            title:<FaUser/>,
            url:'account'
        }
    ],
    categories:[
        {
            id:1,
            title:'electronics',
            url:'electronics'
        },
        {
            id:2,
            title:'cellphones',
            url:'cellphones'
        },
        {
            id:3,
            title:'furniture',
            url:'furniture'
        },
        {
            id:4,
            title:'groceries & beverages',
            url:'groceries'
        },
        {
            id:5,
            title:'beverages',
            url:'beverages'
        },
        {
            id:6,
            title:'babies',
            url:'babies'
        },
        {
            id:7,
            title:'automotive',
            url:'automotive'
        },
        {
            id:8,
            title:'essentials',
            url:'essentials'
        },
        {
            id:9,
            title:'home appliances',
            url:'home-applicances'
        },
        {
            id:10,
            title:'health & beauty',
            url:'health-beauty'
        },
        {
            id:11,
            title:'sports',
            url:'sports'
        },
        {
            id:12,
            title:'office, stationery',
            url:'office-stationery'
        },
        {
            id:13,
            title:'pets',
            url:'pets'
        }
    ],
    menuBars:<FaBars className={''}/>,
    searchIcon:<IoSearchOutline className={'inline'}/>,
    foodMenu:<IoFastFood/>,
    backIcon:<RiArrowGoBackFill/>,
    closeIcon:<MdOutlineClear/>,
    sorterRadios:[
        {
            id:1,
            name:'sorter',
            value:'sort-by-price',
            title:'sort by price'
        },
        {
            id:2,
            name:'sorter',
            value:'sort-by-name',
            title:'sort by name'
        },
        {
            id:3,
            name:'sorter',
            value:'sort-by-relevance',
            title:'sort by relevance'
        }
    ],
    sellerLinks:[
   
        {
            id:1,
            url:'add-items',
            title:<IoMdAdd/>
        },
        {
            id:2,
            url:'notifications',
            title:<IoMdNotifications/>
        },
        {
            id:3,
            url:'account',
            title:<FaUser/>
        }
    ],
    serviceTypes:[
        {
            id:1,
            title:'fast food',
            bgColor:'red',
            children:[
                {
                    id:1,
                    description:'Burgers',
                    imageURL:'https://thumbs.dreamstime.com/b/set-burgers-various-tasty-white-background-42810519.jpg?w=768'
                },
                {
                    id:2,
                    description:'pizza',
                    imageURL:'https://thumbs.dreamstime.com/b/two-pizzas-9874271.jpg?w=768'
                },
                {
                    id:3,
                    description:'chips',
                    imageURL:'https://thumbs.dreamstime.com/b/french-fries-19958154.jpg?w=768'
                },
                {
                    id:4,
                    description:'fried fish',
                    imageURL:'https://thumbs.dreamstime.com/b/fried-fish-fillet-dish-white-plate-53991170.jpg?w=768'
                },
                {
                    id:5,
                    description:'Hot Dogs',
                    imageURL:'https://thumbs.dreamstime.com/b/hot-dogs-26659705.jpg?w=768'
                },
            ]
        },
        {
            id:2,
            title:'cooked food',
            bgColor:'green',
            children:[
                {
                    id:1,
                    description:'grilled',
                    imageURL:'https://thumbs.dreamstime.com/b/delicious-grilled-meat-vegetables-sizzling-over-coals-barbecue-assorted-144113804.jpg?w=768'
                },
                {
                    id:2,
                    description:'roasted',
                    imageURL:'https://thumbs.dreamstime.com/b/thanksgiving-holiday-dinner-served-table-roasted-turkey-103202654.jpg?w=768'
                },
                {
                    id:3,
                    description:'microwaving',
                    imageURL:'https://thumbs.dreamstime.com/b/heating-food-microwave-oven-heating-food-microwave-viewed-inside-back-bowl-vegetable-soup-206610608.jpg?w=768'
                },
                {
                    id:4,
                    description:'baking',
                    imageURL:'https://thumbs.dreamstime.com/b/male-baker-baking-bread-23222724.jpg?w=768'
                },
                {
                    id:5,
                    description:'stews',
                    imageURL:'https://thumbs.dreamstime.com/b/beef-stew-9913473.jpg?w=768'
                },
            ]
        },
        {
            id:3,
            title:'drinks',
            bgColor:'blue',
            children:[
                {
                    id:1,
                    description:'juice',
                    imageURL:'https://thumbs.dreamstime.com/b/orange-juice-17172736.jpg?w=768'
                },
                {
                    id:2,
                    description:'cold drink',
                    imageURL:'https://thumbs.dreamstime.com/b/drink-2910828.jpg?w=768'
                },
                {
                    id:3,
                    description:'beer',
                    imageURL:'https://thumbs.dreamstime.com/b/ice-cold-beer-8614797.jpg?w=768'
                },
                {
                    id:4,
                    description:'water',
                    imageURL:'https://thumbs.dreamstime.com/b/glass-clean-drinking-water-44066082.jpg?w=768'
                },
            ]
        },
        {
            id:4,
            title:'snacks',
            bgColor:'orange',
            children:[
                {
                    id:1,
                    description:'potato chip',
                    imageURL:'https://thumbs.dreamstime.com/b/potato-chips-3627420.jpg?w=768'
                },
                {
                    id:2,
                    description:'bars',
                    imageURL:'https://thumbs.dreamstime.com/b/chocolate-bars-candy-store-1-21947230.jpg?w=768'
                },
                {
                    id:3,
                    description:'crackers',
                    imageURL:'https://thumbs.dreamstime.com/b/spinach-dip-crackers-12629322.jpg?w=768'
                },
                {
                    id:4,
                    description:'nuts',
                    imageURL:'https://thumbs.dreamstime.com/b/mixed-nuts-group-isolated-white-background-37777972.jpg?w=768'
                },
            ]
        },
        {
            id:5,
            title:'traditional',
            bgColor:'brown',
            children:[
                {
                    id:1,
                    description:'pap and wors',
                    imageURL:'https://thumbs.dreamstime.com/b/south-african-tradition-meat-cooked-open-flame-flat-lay-traditional-braai-shisa-nyama-side-dish-pap-chakalaka-246294707.jpg?w=768'
                },
                {
                    id:2,
                    description:'amasi',
                    imageURL:'https://thumbs.dreamstime.com/b/south-african-traditional-drink-fermented-milk-amasi-sour-milk-product-like-yogurt-cottage-cheese-south-african-traditional-247033482.jpg?w=768'
                },
            ]
        },
    ]
}

function ContextProvider(props){

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    )

}

export default ContextProvider