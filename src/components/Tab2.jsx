import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import UsersList from "./UsersList";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../store/slice";

const TabContent2 = ({ onNavigateToTab3 }) => {
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // fetching user
    if (status === "idle") {
      dispatch(getAllUser());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (data?.data) {
      setUserData(data.data);
    }
  }, [data]);

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={onNavigateToTab3}>
          Go to Tab 3
        </Button>
      </Box>

      {userData?.length ? <UsersList users={userData} /> : <CircularProgress />}
    </>
  );
};

export default TabContent2;
