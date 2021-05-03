import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './MenuLink.css'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
const MenuLink = ({ link, path, icon, goBackIcon, onClick, width }) => {
  //console.log("Icon", icon)
  //console.log("goBackIcon",goBackIcon)
  //console.log("width ",width)
    return (
        <>
            <Link to={path}>
                <motion.li
                    style={{ width: width }}
                    onClick={onClick}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                {goBackIcon && <ChevronLeftRoundedIcon fontSize="large" />}
                {link}
                {icon && <ChevronRightRoundedIcon fontSize="large"/>}
                </motion.li>  
            </Link>
        </>
    )
}

export default MenuLink
