import React, { useState } from 'react'
import './MenuHeader.css'
import {Link} from "react-router-dom"

const MenuHeader = () => {
    const [index,setIndex]=useState(0)
    return (
        <div className="menuHeader">
            <div className="menuHeader_links">
                <Link className={`${index === 0 && 'menuHeader__link--active'}`} onClick={()=>setIndex(0)}>
                    All Products
                </Link>
                <Link to="./menu/featured" className={`${index === 1 && 'menuHeader__link--active'}`} onClick={()=>setIndex(1)}>
                    Featured
                </Link>
                <Link to="./menu/previousOrder" className={`${index === 2 && 'menuHeader__link--active'}`} onClick={()=>setIndex(2)}>
                    Previous Order
                </Link>
                <Link to="./favoriteProduct" className={`${index === 3 && 'menuHeader__link--active'}`} onClick={()=>setIndex(3)}>
                    Favorite Products
                </Link>
            </div>
        </div>
    )
}

export default MenuHeader
