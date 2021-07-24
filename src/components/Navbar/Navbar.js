import React, { useState } from 'react'
import { FaTimes, FaBars, FaLinkedin } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MenuIcon, NavMenu, NavHead, NavItem, NavLinks, LinkedIcon } from './Navbar.elements'

const Navbar = () =>
{
    const [click, setClick] = useState(false)

    const handleClick = () =>
    {
        setClick(!click)
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" >
                            Smood Meal API Explorer
                        </NavLogo>
                        {/* justify flex-end */}
                        <LinkedIcon href="https://www.linkedin.com/in/andre16/" target="_blank" >
                            <FaLinkedin />
                        </LinkedIcon>
                        <MenuIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MenuIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavHead>Smood</NavHead>
                            <NavItem>
                                <NavLinks to='/' >Meals list</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/contact' >Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>

    )
}

export default Navbar
