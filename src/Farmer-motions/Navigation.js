import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import MenuLink from "../Containers/MenuLink"
import FindStore from "../Containers/FindStore"
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import SignInButton from "../Containers/SignInButton";
import SignUpButton from "../Containers/SignUpButton";
import LogOutButton from "../Containers/LogOutButton";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const variants2 = {
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

export const Navigation = (toggle) => {
  const [showMenuCategories, setShowMenuCategories] = React.useState(false)
  const user = useSelector(selectUser)
    return (
       
        <>
            {showMenuCategories ?
                (<motion.ul variants={variants}>
                    <MenuLink link="Menu" goBackIcon onClick={() => { setShowMenuCategories(false) }} width="60%"/>
                    <MenuLink link="All Products" path="/" onClick={() => {
                        setShowMenuCategories(false)
                        toggle()
                    }}/>
                     <MenuLink link="Featured" path="/menu/featured" onClick={() => {
                        setShowMenuCategories(false)
                        toggle()
                    }}/>
                     <MenuLink link="Previous Order" onClick={() => {
                        setShowMenuCategories(false)
                        toggle()
                    }}/>
                    <MenuLink link="Favorite Products" onClick={() => {
                        setShowMenuCategories(false)
                        toggle()
                    }}/>
                 </motion.ul>)
                : (
                    <motion.ul variants={variants}>
                        <MenuLink link="Menu" icon onClick={() => setShowMenuCategories(true)} />
                        <MenuLink link="Rewards" />
                        <MenuLink link="Gift Cards" />
                         <motion.hr variants={variants2}/>
                        <motion.div className="navigation_button" variants={variants2}>
                {/* if user signin alreeady then show logout other wise show signin button */}
                          {!user
                            ?
                            (<>
                              <SignInButton />
                              <SignUpButton />
                            </>)
                            :
                            (<LogOutButton/>)
                          }
                        </motion.div>
                        <motion.div variants={variants2}>
                            <FindStore/>
                        </motion.div>
                    </motion.ul>
                ) 
            }
              
           </>
   )
};

