import React from "react";
import TableBody from "./TableBody";

const Content = () => {
  return (
    <div className="mx-auto max-w-7xl py-4">
      <table
        style={{
          width: "100%",
          maxWidth: "100%",
          borderCollapse: "separate",
          borderSpacing: "0 1em",
          margin: "0",
          textAlign: "center",
        }}
      >
        <thead>
          <tr style={{ fontSize: "24px", opacity: "0.45" }}>
            <th>
              <h4>
                <span className="cursor-pointer">#</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="cursor-pointer">Platform</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="cursor-pointer">Last Traded Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="cursor-pointer">Buy / Sell Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="cursor-pointer">Difference</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="cursor-pointer">Savings</span>
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableBody
            rank={1}
            exchangeURL="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
            exchangeLogo="wazirx.png"
            exchangeName="WazirX"
            ltp={"26,66,794"}
            buyPrice={"26,66,794"}
            sellPrice={"26,66,794"}
            difference={"26,66,794"}
            savings={"794"}
          />
          <TableBody
            rank={2}
            exchangeURL="https://bitbns.com/trade/?utm_source=refID_35_2021-07-08&utm_medium=referral_link&utm_campaign=referral#/signup"
            exchangeLogo="bitbns.png"
            exchangeName="Bitbns"
            ltp={"26,66,794"}
            buyPrice={"26,66,794"}
            sellPrice={"26,66,794"}
            difference={"26,66,794"}
            savings={"794"}
          />
          <TableBody
            rank={3}
            exchangeURL="_"
            exchangeLogo="giotus.png"
            exchangeName="Giotus"
            ltp={"26,66,794"}
            buyPrice={"26,66,794"}
            sellPrice={"26,66,794"}
            difference={"26,66,794"}
            savings={"794"}
          />
          <TableBody
            rank={4}
            exchangeURL="_"
            exchangeLogo="colodax.png"
            exchangeName="Colodax"
            ltp={"26,66,794"}
            buyPrice={"26,66,794"}
            sellPrice={"26,66,794"}
            difference={"26,66,794"}
            savings={"794"}
          />
          <TableBody
            rank={5}
            exchangeURL="_"
            exchangeLogo="zebpay.png"
            exchangeName="Zebpay"
            ltp={"26,66,794"}
            buyPrice={"26,66,794"}
            sellPrice={"26,66,794"}
            difference={"26,66,794"}
            savings={"794"}
          />
          <TableBody
            rank={6}
            exchangeURL="_"
            exchangeLogo="coindcx.png"
            exchangeName="CoinDCX"
            ltp={"26,66,794"}
            buyPrice={"26,66,794"}
            sellPrice={"26,66,794"}
            difference={"26,66,794"}
            savings={"794"}
          />
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <a href="https://ftx.com/">
          <img src="ftx.png" />
        </a>
      </div>
    </div>
  );
};

export default Content;
