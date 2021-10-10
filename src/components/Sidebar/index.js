import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarWrapper } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} >
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle} >
                        Discover
                    </SidebarLink>
                    <SidebarLink to="service" onClick={toggle} >
                        Service
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle} >
                        Signup
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap onClick={toggle}>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
