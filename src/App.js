import "./App.css";
import { Routes, Route, } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
//pages
import Home from "./pages/Home";
import Coin from "./pages/Coin";

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/coin">Coin List</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />} />
        {/* <Route path="/coin/details" element={<Coin />} /> */}
      </Routes>
    </div>
  );
}

export default App;
