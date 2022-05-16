import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
function Detail() {
	const location = useLocation();
	// console.log('location.state.', location.state)
	return (
		<div style={{ backgroundColor: "#F3F7FB", padding: 30 }}>
			<Container
				style={{
					backgroundColor: "#fff",
					padding: "18px 30px 18px 30px",
					boxShadow: " 0px 4px 8px rgba(0, 148, 255, 0.25)",
					borderRadius: 10,
					minHeight: "499px"
				}}
			>
				<p style={{ color: "#2569A5", fontWeight: "bold", fontSize: "16px" }}>
					Coin Detail
				</p>
				<Row>
					<Col xs={5} md={2} style={{ color: "#444F5C" }}>
						<p>ID</p>
						<p>Name </p>
						<p>Symbol</p>
						<p>Type</p>
						<p>Active</p>
						<p>Is New ?</p>
					</Col>
					<Col xs={7} md={10} style={{ fontWeight: "bold" }}>
						<p>{location.state.id}</p>
						<p>{location.state.name}</p>
						<p>{location.state.symbol}</p>
						<p>{location.state.type}</p>
						<p>{location.state.is_active.toString()}</p>
						<p>{location.state.is_new.toString()}</p>
					</Col>
				</Row>
				{/* <div>
				
				</div> */}
			</Container>
		</div>
	);
}

export default Detail;
