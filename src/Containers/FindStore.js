import React from 'react'
import './FindStore.css'
import { Link } from "react-router-dom"
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
const FindStore = () => {
    return (
        <Link to="#" className="findStore">
            <LocationOnRoundedIcon/>
            <h5>Find a store</h5>
        </Link>
    )
}

export default FindStore
