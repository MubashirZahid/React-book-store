import React, { useEffect } from "react";
import useUserHook from "../../hooks/useUserHook"; // Import the user data fetching hook
import Button from "../Button/Button";
import "./GetAllUsers.css";

const GetAllUsers = () => {
  const { userData } = useUserHook(); // Replace with the appropriate user data hook

  useEffect(() => {
    if (userData) {
      console.log("From GetAllUsers.jsx ", userData.data);
    }
  }, [userData]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>All Users</h1>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Balance</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.data &&
            userData.data.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.balance}</td>
                <td>{user.phone}</td>
                <td>
                  <Button
                    text="Edit"
                    style={{ backgroundColor: "#007bff", color: "white" }}
                  />
                </td>
                <td>
                  <Button
                    text="Delete"
                    style={{ backgroundColor: "red", color: "white" }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllUsers;
