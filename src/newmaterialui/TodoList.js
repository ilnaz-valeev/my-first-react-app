import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  IconButton,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#282c34",
        color: "white",
        padding: 4,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        variant="outlined"
        fullWidth
        sx={{ backgroundColor: "#333", marginBottom: 2 }}
        InputLabelProps={{ style: { color: "white" } }}
        InputProps={{ style: { color: "white" } }}
      />
      <Button onClick={handleAddTask} variant="contained" sx={{ mb: 2 }}>
        Add Task
      </Button>

      <List sx={{ width: "100%" }}>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ mb: 1 }}>
            <Card
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#333",
              }}
            >
              <CardContent sx={{ color: "white" }}>{task}</CardContent>
              <IconButton
                onClick={() => handleDeleteTask(index)}
                sx={{ alignSelf: "center", color: "white" }}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
