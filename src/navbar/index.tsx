'use client';

import React from 'react';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import { useState } from 'react';
import useScreenWidth from '@/hooks/useScreenWidth';

const MainNavBar = () => {
  // const [isActive, setActive] = useState(true);
  const screenWidth = useScreenWidth();

  // const handleToggle = () => {
  //   setActive(!isActive);
  //   console.log(isActive);
  // };

  return (
    // <div className="nav-bar">
    //   <a href="/">Home</a>
    //   <a href="/contact">Contact</a>
    //   <a href="/projects">Projects</a>
    //   <a href="/resume">Resume</a>
    // </div>
    <>
      <Navbar
        className={
          screenWidth > 992 ? 'custom-nav-bar' : 'custom-nav-bar-mobile'
        }
        expand="lg"
        collapseOnSelect
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <NavbarToggle aria-controls="navbar-nav" />
            <NavbarCollapse id="navbar-nav">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/portfolio">PowerBI Portfolio</NavLink>
              <NavLink href="/resume">Resume</NavLink>
            </NavbarCollapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavBar;
