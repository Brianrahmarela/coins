import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Table,
	Button,
	Form,
	InputGroup,
	FormControl,
	Row,
	Col
} from "react-bootstrap";
import Pagination from "../component/Pagination";
import Detail from "./Detail";
import { Routes, Route } from "react-router-dom";

function Coin() {
	const [coin, setCoin] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(4);
	const [selectedItem, setSelectedItem] = useState({});
	const [selectedSearch, setSelectedSearch] = useState({
		name: ""
	});
	console.log("state coin", coin);
	console.log("state selectedItem", selectedItem);
	console.log("state selectedSearch", selectedSearch);

	let navigate = useNavigate();

	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/coins/")
			.then((res) => res.json())
			.then((data) => setCoin(data))
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log("state coin", coin);

	let filtered = coin.filter((item, index) => {
		return index < 50;
	});
	console.log("filtered", filtered);

	//Get current post
	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const [item, setItem] = useState();
	console.log("ITEM FINAL", item);

	var currentPost = filtered.slice(indexOfFirstPost, indexOfLastPost);
	console.log("currentPost", currentPost);

	//Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const selectId = (item) => {
		console.log("item selected", item);
		setSelectedItem(item);
		navigate("/coin/details", { state: item });
	};

	const findSearch = (nameKey, arr) => {
		console.log("msklkk");
		console.log("nameKey", nameKey);
		console.log("arr", arr);
		console.log("currentPost", currentPost);
		if (nameKey !== "") {
			currentPost = arr.find((x) => x.name === nameKey);
			console.log("currentPost found", currentPost);

			setItem((prev) => ({
				...prev,
				...currentPost
			}));
		} else {
			setItem();
		}
	};

	const handleChange = (e) => {
		console.log("msk");
		console.log("currentPost", currentPost);
		const { id, value } = e.target;
		console.log("id", id);
		console.log("value", value);

		setSelectedSearch((prev) => ({
			...prev,
			[id]: value
		}));
	};

	return (
		<>
			<>
				{}
				<Routes>
					<Route path="/details" element={<Detail />} />
				</Routes>

				<div style={{ backgroundColor: "#F3F7FB", padding: 30 }}>
					<div
						style={{
							backgroundColor: "white",
							paddingLeft: 30,
							paddingRight: 30,
							paddingTop: 18
						}}
					>
						<p
							style={{ color: "#2569A5", fontWeight: "bold", fontSize: "16px" }}
						>
							Coin List
						</p>
						<div>
							<Row>
								<Col sm={4}>
									<Form.Select aria-label="Default select example">
										<option>Select</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</Form.Select>{" "}
								</Col>
								<Col sm={8}>
									{" "}
									<InputGroup className="mb-3">
										<FormControl
											placeholder="Search"
											aria-label="Search"
											aria-describedby="basic-addon2"
											onChange={handleChange}
											id="name"
											value={selectedSearch.name}
										/>
										<Button
											id="basic-addon2"
											onClick={() =>
												findSearch(selectedSearch.name, currentPost)
											}
										>
											Search
										</Button>
									</InputGroup>
								</Col>
							</Row>
						</div>
						<div
							className="justify-content-center "
							style={{ backgroundColor: "white" }}
						>
							<Table bordered={false} hover>
								<thead>
									<tr style={{ backgroundColor: "#3783C6" }}>
										<th style={{ color: "white" }}>ID</th>
										<th style={{ color: "white" }}>Name</th>
										<th style={{ color: "white" }}>Symbol</th>
										<th style={{ color: "white" }}>Rank</th>
										<th style={{ color: "white" }}>Type</th>
										<th style={{ color: "white" }}>Active</th>
										<th style={{ color: "white" }}>Action</th>
									</tr>
								</thead>
								<tbody>
									{item ? (
										<tr>
											<td style={{ color: "#0062A6" }}>
												<button onClick={() => selectId(item)}>
													{item.id}
												</button>
											</td>
											<td>{item.name}</td>
											<td>{item.symbol}</td>
											<td>{item.rank}</td>
											<td>{item.type}</td>
											<td>{item.is_active ? item.is_active.toString() : ""}</td>
											<td>
												<Button variant="danger">Delete</Button>{" "}
											</td>
										</tr>
									) : (
										currentPost.map((item, idx) => (
											<tr key={idx}>
												<td style={{ color: "#0062A6" }}>
													<button onClick={() => selectId(item)}>
														{item.id}
													</button>
												</td>
												<td>{item.name}</td>
												<td>{item.symbol}</td>
												<td>{item.rank}</td>
												<td>{item.type}</td>
												<td>{item.is_active.toString()}</td>
												<td>
													<Button variant="danger">Delete</Button>{" "}
												</td>
											</tr>
										))
									)}
								</tbody>
							</Table>
						</div>
					</div>
					<Pagination
						postPerPage={postPerPage}
						totalPost={filtered.length}
						paginate={paginate}
						setSelectedSearch={setSelectedSearch}
					/>
				</div>
			</>
		</>
	);
}

export default Coin;
