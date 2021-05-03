import React from 'react'
import './MenuScreen.css'
import menuList from '../Containers/menuList.json'
import MenuHeader from '../Containers/MenuHeader'
import MenuList from "../Containers/MenuList"
import MenuItem from "../Containers/MenuItem"

const MenuScreen = () => {
    return (
        <div className="menuScreen">
            <MenuHeader/>
            <div className="menu_container">
                <div className="menu_left">
                    <MenuList/>
                </div>
                <div className="menu_right">
                    <h1>Menu</h1>
                    <div className="menu_category">
                        <h2>Drink</h2>
                        <div className="menu_items">
                        {menuList.map((menuListCategory) =>
                            menuListCategory.drinks.map(({ type, path, image }) => (
                            <MenuItem type={type} image={image} />
                            ))
                        )}
                        </div>
                    </div>
                    <div className="menu_category">
                        <h2>Food</h2>
                        <div className="menu_items">
                        {menuList.map((menuListCategory) =>
                            menuListCategory.food.map(({ type, path, image }) => (
                            <MenuItem type={type} image={image} />
                            ))
                        )}
                        </div>
                    </div>
                    <div className="menu_category">
                        <h2>Coffee</h2>
                        <div className="menu_items">
                        {menuList.map((menuListCategory) =>
                             menuListCategory.atHomeCoffee.map(({ type, path, image }) => (
                             <MenuItem type={type} image={image} />
                            ))
                        )}
                        </div>
                    </div>
                    <div className="menu_category">
                        <h2>Merchandise</h2>
                        <div className="menu_items">
                        {menuList.map((menuListCategory) =>
                            menuListCategory.merchandise.map(({ type, path, image }) => (
                            <MenuItem type={type} image={image} />
                            ))
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuScreen
