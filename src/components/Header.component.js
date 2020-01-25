import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Modal
} from "react-bootstrap";

export default class Headercomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      registerShow:false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseRegister = this.handleCloseRegister.bind(this);
    this.handleShowRegistaer = this.handleShowRegistaer.bind(this);
  }
  handleClose() {
    this.setState({
      show: false
    });
  }
  handleShow() {
    this.setState({
      registerShow: false,
      show: true,
    });
  }
  handleCloseRegister() {
    this.setState({
      registerShow: false
    })
  }
  handleShowRegistaer() {
    this.setState({
      show: false,
      registerShow: true
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="#home">Payroll Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="nav-links">
              <Nav.Link onClick={this.handleShow}>Login</Nav.Link>
              <Nav.Link onClick={this.handleShowRegistaer}>Register</Nav.Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Employee Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleShowRegistaer}>
                  Register
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Login
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.registerShow} onHide={this.handleCloseRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Employee Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Firstname" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="email" placeholder="Last Firstname" />
              </Form.Group>
              <Form.Group controlId="formBasicphone">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Mobile Number" />
                <Form.Text className="text-muted">
                 
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="password" placeholder="Phonenumber" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleShow}>
                  Login
                </Button>
                <Button variant="primary" onClick={this.handleCloseRegister}>
                  Register
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}
