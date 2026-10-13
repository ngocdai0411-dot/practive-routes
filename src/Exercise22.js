import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Khai báo các trang component
const Home = () => <div align='center' style={{ marginTop: '30px' }}>Home Component</div>;
const About = () => <div align='center' style={{ marginTop: '30px' }}>About Component</div>;
const Contact = () => <div align='center' style={{ marginTop: '30px' }}>Contact Component</div>;
const Profile = () => <div align='center' style={{ marginTop: '30px' }}>Profile Component</div>;

// Component CustomNavbar sử dụng Reactstrap kết hợp Link của react-router-dom
const CustomNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md" className="px-3">
      <NavbarBrand tag={Link} to="/">Logo</NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/profile">Profile</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

// Component chính của Exercise 22 chứa Router và các Routes
export default function Exercise22() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}