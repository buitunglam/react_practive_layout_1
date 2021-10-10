import React, { useState, useEffect } from 'react'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 0) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}>Dollar</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass='active'
                to="about"
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass='active'
                to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass='active'
                to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                activeClass='active'
                to="signup">Signup</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/signin" >Sign In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
