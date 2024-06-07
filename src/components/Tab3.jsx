import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

const HelloTaskComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const times = parseInt(inputValue, 10);
    if (!isNaN(times) && times > 0) {
      const newOutput = [];
      recursivePrint(times, newOutput);
      newOutput.push("STOP");
      setOutput(newOutput);
    }
  };

  const recursivePrint = (n, arr) => {
    if (n === 0) return;
    arr.push("Hello Task");
    recursivePrint(n - 1, arr);
  };

  return (
    <Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          label="Enter a number"
          type="number"
          value={inputValue}
          onChange={handleChange}
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        {output.map((number, index) => (
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
                justifyContent: "center",
                alignItems: "center",
                margin: 1,
                width: 200,
                height: 50,
                borderRadius: 4,
                backgroundColor: "#f0f0f0",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h5" align="center" color="textPrimary">
                {number}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HelloTaskComponent;
