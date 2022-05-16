import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";

function App() {
	const location = useLocation();
	console.log("location path", location.pathname);

	return (
		<div className="App">
			<>
				<Navbar className="nav" expand="sm" sticky="top">
					<Container fluid>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-sm`}
							aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
							placement="end"
						>
							<Nav
								className="justify-content-start flex-grow-1 pe-3"
								activeKey={location.pathname}
							>
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/coin">Coin List</Nav.Link>
								<Nav.Link href="/contact">Contact</Nav.Link>
							</Nav>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			</>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/coin" element={<Coin />} />
				<Route path="/coin/details" element={<Detail />} />
				<Route path="contact" element={<Contact />} />
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
