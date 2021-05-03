import React from 'react'
import { Link } from "react-router-dom"
import FindStore from "../Containers/FindStore"
import './FooterSecond.css'
const FooterSecond = ({ alignItems, paddingLeft, flexDirection }) => {
    return (
        <div
        className='footerSecondary'
        style={{ alignItems, paddingLeft: `${paddingLeft * 2}px` }}
      >
        <div
          className='footerSecondary__container'
          style={{ paddingLeft: `${paddingLeft}px` }}
        >
          <div className='footerSecondary__info'>
            <div className='footerSecondary__left'>
              <FindStore />
            </div>
            <div className='footerSecondary__right' style={{ flexDirection }}>
              <Link>Responsibility</Link>
              <Link>Web Accessibility</Link>
              <Link>Privacy Policy</Link>
              <Link>Terms of Use </Link>
              <Link>Cookie Preferences</Link>
            </div>
          </div>
          <span className='footerSecondary__copyright'>© 2021 CoffeeHouse</span>
        </div>
      </div>
    )
}

export default FooterSecond
