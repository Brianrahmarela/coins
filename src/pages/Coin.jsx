import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Coin() {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins/")
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, []);

  console.log("state coin", coin);

  let filtered = coin.filter((item, index) => {
    return index < 5;
  });
  console.log("filtered", filtered);

  return (
    <>
      <div>Coin List</div>

      <>
        <div style={{ backgroundColor: "#F3F7FB", padding: 30 }}>
          <div
            className="d-flex justify-content-center "
            style={{ backgroundColor: "white" }}
          >
            <table style={{ width: "75%" }}>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Type</th>
                <th>Active</th>
              </tr>
              {filtered.map((item, idx) => (
                <>
                  <tr>
                    <td>{item.id}</td>
                  </tr>
                </>
              ))}
            </table>
          </div>
        </div>
      </>
      {/* ))
        : ""} */}
    </>
  );
}

export default Coin;
