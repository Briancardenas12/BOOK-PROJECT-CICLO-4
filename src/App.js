import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import BookList from "./components/book-list.component";
import CreateBook from "./components/create-book.component";
import EditBook from "./components/edit-book.component";
import HomeBook from "./components/home-book.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  App Brian-s Books Blog
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-book"} className="nav-link">
                    Crear Libros
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/book-list"} className="nav-link">
                    Listar Libros
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <HomeBook {...props} />}
                  />
                  <Route
                    exact
                    path="/create-book"
                    component={(props) => <CreateBook {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-book/:id"
                    component={(props) => <EditBook {...props} />}
                  />
                  <Route
                    exact
                    path="/book-list"
                    component={(props) => <BookList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
export default App;
