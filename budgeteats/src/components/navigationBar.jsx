import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">BudgetEats</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="features">Ingredients</Nav.Link>
          <Nav.Link href="features">Recipes</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
