import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Navbar.css";

export default function AppNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Always show navbar near top
      if (window.scrollY < 100) {
        setShowNavbar(true);
        return;
      }

      // Hide when scrolling down
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      }
      // Show when scrolling up
      else {
        setShowNavbar(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`main-nav ${
        showNavbar ? "nav-visible" : "nav-hidden"
      }`}
    >
      <Container>
        {/* LOGO */}
        <Navbar.Brand className="nav-logo">
          <img src="/Images/logo.png" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {/* CENTER MENU */}
          <Nav className="mx-auto nav-center">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/page">SERVICES</Nav.Link>
            <Nav.Link href="/cont">CONTACT</Nav.Link>
          </Nav>

          {/* RIGHT INFO */}
          <div className="nav-info">
            <div className="info-item">
              <i className="bi bi-geo-alt"></i>
              <span>Pune- 412207, Maharashtra</span>
            </div>

            <div className="info-item">
              <i className="bi bi-telephone"></i>
              <span>+91 9834358565</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}