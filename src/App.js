import "./App.scss";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
//pages
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <>
        {/* <Navbar className="nav">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/coin">Coin List</Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}

        <Navbar className="nav" expand="sm" sticky="top">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Offcanvas
                </Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/coin">Coin List</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/coin" element={<Coin />} />
        <Route exact path="/coin/details" element={<Detail />} />
      </Routes>
      <div
        style={{ backgroundColor: "#1D4279" }}
        className="justify-content-center d-flex"
      >
        {/* <p style={{color: 'white', margin: 10, padding: 0}}>Kandidat : [Brian Rahmarela]</p> */}
      </div>
    </div>
  );
}

export default App;
