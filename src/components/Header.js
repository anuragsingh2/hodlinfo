import React from "react";
import NavDropdown from "./NavDropdown";
import Timer from "./Timer";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <nav className="max-w-7xl pl-40">
      <div className="py-8 mx-auto">
        <div className="flex justify-between">
          <div className="text-white font-bold">
            <a href="/">
              <img src="Brand.png" className="h-10 w-60" />
            </a>
            <span className="text-text-secondary">
              Powered By{" "}
              <a href="https://finstreet.in" className="text-text-primary">
                Finstreet
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <NavDropdown firstOption="INR" options={["INR"]} />
            <NavDropdown
              firstOption="BTC"
              options={[
                "BTC",
                "ETH",
                "USDT",
                "XRP",
                "TRX",
                "DASH",
                "ZEC",
                "XEM",
                "IOST",
                "WIN",
                "BIT",
                "WRX",
              ]}
            />
            <a
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
              target="_blank"
            >
              BUY BTC
            </a>
          </div>
          <div className="flex items-center space-x-5 text-light">
            <Timer />
            <a
              href="/connect/telegram"
              className="flex items-center space-x-2 bg-primary rounded-full px-6 py-2"
            >
              <div>
                <img
                  src="telegram.png"
                  className="h-15 mr-1"
                  style={{ height: "15px" }}
                />
              </div>

              <div>Connect Telegram</div>
            </a>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
