import React, { useState } from "react"
import { FaTimes, FaBars, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import {
  Nav,
  NavbarContainer,
  NavbarRight,
  NavLogo,
  MenuIcon,
  NavMenu,
  NavHead,
  NavItem,
  NavLinks,
  LinkedIcon,
} from "./Navbar.elements"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              {process.env.REACT_APP_NAME} Meal API Explorer
            </NavLogo>
            <NavbarRight>
              <LinkedIcon
                href="https://www.linkedin.com/in/andre16/"
                target="_blank"
              >
                <FaLinkedin />
              </LinkedIcon>
              <MenuIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MenuIcon>
            </NavbarRight>
            <NavMenu onClick={handleClick} click={click}>
              <NavHead>{process.env.REACT_APP_NAME}</NavHead>
              <NavItem>
                <NavLinks to="/">Meals list</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
