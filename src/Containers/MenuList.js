import React from 'react'
import './MenuList.css'
import menuList from "../Containers/menuList.json"
import {Link} from "react-router-dom"
const MenuList = () => {
    return (
        <div className="menuList">
            <div className="menuList_container">
                <h4>Drinks</h4>
                <div className="menuList_items">
                {menuList.map((menuListCategory) =>
                    menuListCategory.drinks.map((menuListItem) => (
                        <Link>{menuListItem.type}</Link>
                    ))
                )}
                </div>
            </div>
            <div className="menuList_container">
                <h4>Foods</h4>
                <div className="menuList_items">
                {menuList.map((menuListCategory) =>
                    menuListCategory.food.map((menuListItem) => (
                        <Link>{menuListItem.type}</Link>
                    ))
                )}
                </div>
            </div>
            <div className="menuList_container">
                <h4>Coffee</h4>
                <div className="menuList_items">
                {menuList.map((menuListCategory) =>
                    menuListCategory.atHomeCoffee.map((menuListItem) => (
                        <Link>{menuListItem.type}</Link>
                    ))
                )}
                </div>
            </div>
            <div className="menuList_container">
                <h4>Merchandise</h4>
                <div className="menuList_items">
                {menuList.map((menuListCategory) =>
                    menuListCategory.merchandise.map((menuListItem) => (
                        <Link>{menuListItem.type}</Link>
                    ))
                )}
                </div>
            </div>
        </div>
    )
}

export default MenuList
