import { Avatar, Box, Typography, Paper } from "@mui/material";
import React from "react";

const User = ({ user }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          padding: 2,
          margin: 2,
          minWidth: "400px",
        }}
      >
        <Avatar
          alt={user.first_name}
          src={user.avatar}
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
        <Box>
          <Typography variant="h6">
            {user.first_name} {user.last_name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {user.email}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default User;
