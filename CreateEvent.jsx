import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import "./CreateEvent.css";

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    contact: "",
    date: "",
    max: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Event i ri:", formData);
    alert("Eventi u krijua!");
  }

  return (
    <Box className="createEventWrapper">
      <Paper className="eventCard" elevation={8}>
        <Typography variant="h5" align="center" gutterBottom>
          Krijo Event të Ri
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 3 }}>
          Plotëso të dhënat më poshtë
        </Typography>

        <TextField label="Titulli i eventit" id="title" fullWidth onChange={handleChange} />
        <TextField label="Qyteti" id="city" fullWidth onChange={handleChange} />
        <TextField label="Numër kontakti" id="contact" fullWidth onChange={handleChange} />
        <TextField type="date" id="date" fullWidth onChange={handleChange} InputLabelProps={{ shrink: true }} />
        <TextField label="Numri maksimal" id="max" type="number" fullWidth onChange={handleChange} />

        <Button variant="contained" size="large" onClick={handleSubmit} sx={{ mt: 2 }}>
          Krijo Event
        </Button>

        <Typography variant="caption" align="center" sx={{ mt: 2, display: "block", color: "#777" }}>
          Eventin mund ta ndryshosh ose fshish më vonë.
        </Typography>
      </Paper>
    </Box>
  );
}
