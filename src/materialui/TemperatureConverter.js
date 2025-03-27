import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Температурный конвертер
const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit(value ? (value * 9) / 5 + 32 : "");
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(value ? ((value - 32) * 5) / 9 : "");
  };

  return (
    <Card sx={{ maxWidth: 300, p: 2, mb: 4 }}>
      <CardContent>
        <TextField
          label="Цельсий"
          variant="outlined"
          fullWidth
          value={celsius}
          onChange={handleCelsiusChange}
          margin="normal"
        />
        <TextField
          label="Фаренгейт"
          variant="outlined"
          fullWidth
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          margin="normal"
        />
      </CardContent>
    </Card>
  );
};


// Главный компонент


export default TemperatureConverter;

