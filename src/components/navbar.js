import React, { useState, useRef } from "react";
import { Navbar, Nav, NavDropdown, Overlay, Popover } from "react-bootstrap";
import Cart from "./cartList";
const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const ref = useRef(null);
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Online Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onMouseOver={handleClick} eventKey={2} href="#memes">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>{" "}
      <div ref={ref}>
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Cart</Popover.Title>
            <Popover.Content>
              <Cart />
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>{" "}
    </React.Fragment>
  );
};

export default NavbarComponent;
