import React from "react";

const Footer = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <footer
      id="footer"
      className={"section " + (darkTheme ? "footer-dark bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">
              Copyright © 2023{" "}
              <a
                href="#about"
                className="fw-500"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
              >
                SJC Software Inc
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
