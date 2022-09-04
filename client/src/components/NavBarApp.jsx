import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

function NavBarApp() {
  const [songList, setSongList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        setSongList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const success = "Success";
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "lightgray" }}>
        <Container fluid>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Song"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        {songList
          .filter((val) => {
            if (search === "") {
              return null;
            } else if (val.song.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div style={{display:'inline-block', margin:'20px' }}>
                <Card
                  bg={success.toLowerCase()}
                  key={success}
                  text={success.toLowerCase() === "light" ? "dark" : "white"}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>{val.artist}</Card.Header>
                  <Card.Body>
                    <Card.Title> {val.song} </Card.Title>
                    <Card.Text>
                      <img src={`/uploads/${val.artwork}`}></img>
                    </Card.Text>
                    <Card.Text>{val.DateOfRelease}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default NavBarApp;
