import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import Pagination from "../component/Pagination";

function Coin() {
  const [coin, setCoin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage,] = useState(4);


  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins/")
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, []);

  console.log("state coin", coin);

  let filtered = coin.filter((item, index) => {
    return index < 50;
  });
  console.log("filtered", filtered);

  //Get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = filtered.slice(indexOfFirstPost, indexOfLastPost)
  console.log('currentPost', currentPost)

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  // function paginate(array, postPerPage, currentPage) {
  //   return array.slice((currentPage - 1) * postPerPage, currentPage * postPerPage);
  // }

  // console.log("pagination", paginate(filtered, 4, 2));

  return (
    <>
      <>
        <div style={{ backgroundColor: "#F3F7FB", padding: 30 }}>
          <div
            style={{
              backgroundColor: "white",
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop: 18,
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
                    />
                    <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
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
                {currentPost.map((item, idx) => (
                  <>
                    <tbody>
                      <tr key={idx}>
                        <td style={{ color: "#0062A6" }}>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.symbol}</td>
                        <td>{item.rank}</td>
                        <td>{item.type}</td>
                        <td>{item.is_active.toString()}</td>
                        <td>
                          <Button variant="danger">Delete</Button>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </>
                ))}
              </Table>
            </div>
          </div>
            <Pagination postPerPage={postPerPage} totalPost={filtered.length} paginate={paginate}/>
        </div>
      </>
      {/* ))
        : ""} */}
    </>
  );
}

export default Coin;
