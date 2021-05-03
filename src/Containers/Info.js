import React from 'react'
import { Link } from 'react-router-dom'
import "./Info.css"
const Info = ({title,image,info,path,link,color,background,className}) => {
    return (
        <div className="info" style={{ color, background }}>
            <img src={image} alt={title} className="info_img" />
            <div className="info_text">
                <h4>{title}</h4>
                <h6>{info}</h6>
                <Link to={path} style={{ color }} className={className}>
                    {link}
                </Link>
            </div>
        </div>
    )
}

export default Info
