import React from "react";
import "./Navbar.css"; // Import the corresponding CSS file
import Button from "../Button/Button"; // Import the Button component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          {/* Insert your logo here */}
          <img src="" alt="Logo" />
        </div>
      </div>
      <div className="navbar-middle">
        <input type="text" placeholder="Search..." className="search-input" />
        <Button
          text="Search"
          style={{ backgroundColor: "#007bff", color: "white" }}
        />
      </div>
      <div className="navbar-right">
        <div className="nav-buttons">
          <Button
            text="Home"
            style={{ backgroundColor: "#007bff", color: "white" }}
          />
          <Button
            text="Writers"
            style={{ backgroundColor: "#007bff", color: "white" }}
          />
          <Button
            text="About"
            style={{ backgroundColor: "#007bff", color: "white" }}
          />
          <Button
            text="Log In"
            style={{ backgroundColor: "#007bff", color: "white" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
