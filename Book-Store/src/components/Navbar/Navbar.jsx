import React from "react";
import "./Navbar.css"; // Import the corresponding CSS file
import Button from "../Button/Button"; // Import the Button component
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state

const Navbar = () => {
  // Access the user data from the Redux store
  const user = useSelector((state) => state.user.user);
  console.log(user);

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
          {user ? (
            // Display the user's email if they are logged in
            <div>Welcome, {user.email}</div>
          ) : (
            // Display login button if the user is not logged in
            <Link to="/login">
              <Button
                text="Log In"
                style={{ backgroundColor: "#007bff", color: "white" }}
              />
            </Link>
          )}

          <Link to="/create-book">
            <Button
              text="Add Books"
              style={{ backgroundColor: "#007bff", color: "white" }}
            />
          </Link>

          <Link to="/update-book">
            <Button
              text="Edit Books"
              style={{ backgroundColor: "#007bff", color: "white" }}
            />
          </Link>

          <Link to="/delete-book">
            <Button
              text="Delete Books"
              style={{ backgroundColor: "#007bff", color: "white" }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
