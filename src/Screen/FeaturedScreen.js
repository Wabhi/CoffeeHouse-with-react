import { Fade } from 'react-awesome-reveal'
import React from 'react'
import './FeaturedScreen.css'
import Heading from '../Containers/Heading'
import Info from '../Containers/Info'
import Featured from "../Containers/Featured"

const FeaturedScreen = () => {
    return (
        <div className="featuredScreen">
            <Fade>
                <Heading heading="SELF CARE IS COOL"/>
            </Fade>
            <Fade>
                <div className="discover">
                <Featured
                        title="NICELY NONDAIRY"
                        info="Say yes to sips of delight with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew."
                        link="Explore the honey drinks"
                        path=""
                        image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png"
                        background="#f0ebe0"
                        color="#1e3932"
                        className="featured__hoverLight"/>
                    <Featured
                        title="PISTACHIOOOOOOO"
                        info="Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino® blended beverage."
                        link="Try the new pistachio drinks"
                        path=""
                        image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png"
                        order="2"
                        background="#f0ebe0"
                        color="#1e3932"
                        className="featured__hoverLight"
                    />
                 </div>
            </Fade>
            <Fade>
                <Heading heading="LIFE IS GOOD WITH WHEN YOU HAVE COFFEE CUP"/>
            </Fade>
            <Fade>
                <div className="discover1">
                <Info
                    title="NEW Pistachio Latte"
                    image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67901.png"
                    info="Espresso, steamed milk and nutty pistachio sauce."
                    link="Order"
                    color="white"
                    background="#1e3932"
                    className="info__hoverDark"
                   />
                  <Info
                    title="NEW Pistachio Frappuccino® blended beverage"
                    image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67900.png"
                    info="Finished with whipped cream and a brown-buttery topping. "
                    link="Order"
                    color="white"
                    background="#1e3932"
                    className="info__hoverDark"
                   />
                   <Info
                    title="Nitro Cold Brew"
                    image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67905.png"
                    info="Velvety-smooth with a lush, cascading texture. "
                    link="Order"
                    color="white"
                    background="#1e3932"
                    className="info__hoverDark"
                   />
                   <Info
                    title="Nitro Cold Brew with Sweet Cream"
                    image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67906.png"
                    info="Topped with house-made sweet cream."
                    link="Order"
                    color="white"
                    background="#1e3932"
                    className="info__hoverDark"
                    />
                </div>
            </Fade>
        </div>
    )
}

export default FeaturedScreen
