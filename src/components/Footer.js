import React from "react";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex space-x-2">
        <div className="footer-text">Copyright © 2019 </div>
        <div className="footer-text">HodlInfo.com</div>
        <div className="text-secondary">
          "Deployed By "
          <a
            style={{ color: "rgb(61, 198, 193)" }}
            rel="nofollow"
            href="https://www.quadbtech.com"
            target="_blank"
          >
            {" "}
            QuadBTech
          </a>
        </div>
        <div
          className="footer-text pointer text-black"
          style={{ marginLeft: "auto" }}
        >
          <a href="mailto:support@hodlinfo.com" className="text-white">
            Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
