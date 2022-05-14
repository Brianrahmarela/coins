import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
    const location = useLocation();

  return (
    <div>
      <p>Hal detail</p>
      <p>ID {location.state.id}</p>
      <p>Name {location.state.name}</p>
      <p>Symbol {location.state.symbol}</p>
      <p>Type {location.state.type}</p>
      <p>Active {location.state.is_active.toString()}</p>
      <p>Is New ? {location.state.is_new.toString()}</p>
    </div>
  );
}

export default Detail;
