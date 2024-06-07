import React from "react";
import User from "./User";
import { Typography } from "@mui/material";

const UsersList = ({ users }) => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", marginTop: "16px" }}>
        User list
      </Typography>
      {users?.map((user) => (
        <User user={user} />
      ))}
    </>
  );
};

export default UsersList;
