import React from 'react'
import './MenuItem.css'
import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"
const MenuItem = ({type,image}) => {
    return (
        <Fade>
           <Link className='menuItem'>
            <img src={image} alt='' className='menuItem_image' />
            <h4 className='menuItem_type'>{type}</h4>
          </Link>
        </Fade>
    )
}

export default MenuItem
