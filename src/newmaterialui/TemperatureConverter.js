import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
    } else {
      setFahrenheit((value * 9) / 5 + 32);
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
    } else {
      setCelsius(((value - 32) * 5) / 9);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#282c34",
        color: "white",
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Temperature Converter
      </Typography>
      <TextField
        label="Celsius (°C)"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        variant="outlined"
        sx={{ backgroundColor: "#333" }}
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{ style: { color: "white" } }}
      />
      <TextField
        label="Fahrenheit (°F)"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        variant="outlined"
        sx={{ backgroundColor: "#333" }}
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{ style: { color: "white" } }}
      />
    </Box>
  );
};

export default TemperatureConverter;
