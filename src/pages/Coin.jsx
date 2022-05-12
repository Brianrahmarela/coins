import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Coin() {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins/")
      .then((res) => res.json())
      .then((data) => setCoin([data]));
    //   .then(data => console.log('data', data))
  }, []);
  console.log("state coin", coin);

  return (
    <>
      <div>Coin List</div>
      {/* {coin ? coin[0].map((item, idx) => ( */}
      <>
      <div style={{ backgroundColor: "#F3F7FB", padding: 30 }}>

        <div
          className="d-flex justify-content-center "
          style={{ backgroundColor: "white" }}
        >
          <Table striped bordered hover className="w-75 p-3">
            <thead>
              <tr style={{ backgroundColor: "#3783C6" }}>
                <th style={{ color: "white" }}>id</th>
                <th style={{ color: "white" }}>Name</th>
                <th style={{ color: "white" }}>Symbol</th>
                <th style={{ color: "white" }}>rank</th>
                <th style={{ color: "white" }}>Type</th>
                <th style={{ color: "white" }}>Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "#0062A6" }}>btc-bitcoin</td>
              </tr>
              <tr>
                <td style={{ color: "#0062A6" }}>eth-ethereum</td>
              </tr>
              <tr>
                <td style={{ color: "#0062A6" }}>usdt-tether</td>
              </tr>
              <tr>
                <td style={{ color: "#0062A6" }}>bnb-binance-coin</td>
              </tr>
            </tbody>
          </Table>
        </div>
        </div>

      </>
      {/* ))
        : ""} */}
    </>
  );
}

export default Coin;
