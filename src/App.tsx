import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";


import Add from "./components/add.component";
import Edit from "./components/edit.component";
import Home from "./components/list.component";
// Bootstrap
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from 'react-bootstrap/Navbar'
import { Container, Form, FormControl, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import Detail from "./components/detail.component";


class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar className="navbar-dark bg-dark" bg="light" expand="lg">
          <Container fluid>
            <Nav.Link href="/products" className="navbar-brand">Shopping</Nav.Link>
            {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link href="/products">Home</Nav.Link>
                <Nav.Link href="/add">Add</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

{/* When you want to create new page, you must require to add new route (this path) to avoid crush on the internet you see there */}
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/products"]} component={Home} />
            <Route exact path="/add" component={Add} />
            <Route path="/detail/:idproduct" component={Detail} />
            <Route path="/edit/:idproduct" component={Edit} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;