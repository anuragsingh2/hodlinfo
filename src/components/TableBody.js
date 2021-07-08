import React, { useState, useEffect } from "react";

const TableBody = ({
  rank,
  exchangeURL,
  exchangeLogo,
  exchangeName,
  ltp,
  buyPrice,
  sellPrice,
  difference,
  savings,
}) => {
  const [up, setUp] = useState("");
  const handleUp = (difference) => {
    setUp(difference >= 0);
  };
  useEffect(() => {
    handleUp();
  }, [up]);
  return (
    <tr style={{ background: "#2e3241" }}>
      <td>
        <h4 style={{ marginRight: "60px" }}>{rank}</h4>
      </td>
      <td>
        <a href={exchangeURL} target="_blank">
          <h4
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={exchangeLogo}
              style={{ height: "24px", width: "24px", marginRight: "10px" }}
            />
            <span> </span>
            <span style={{ fontWeight: "600" }}>{exchangeName}</span>
          </h4>
        </a>
      </td>
      <td>
        <h4>&#8377; {ltp}</h4>
      </td>
      <td>
        <h4>
          <span style={{ fontWeight: "600" }}>
            &#8377; {buyPrice} / {sellPrice}{" "}
          </span>
        </h4>
      </td>
      <td>
        <h4 style={{ fontWeight: "600" }}>{difference} %</h4>
      </td>
      <td>
        <h4 style={{ fontWeight: "600" }}>
          {up ? "▼ " : "▲ "}
          &#8377;
          {savings}
        </h4>
      </td>
    </tr>
  );
};

export default TableBody;
