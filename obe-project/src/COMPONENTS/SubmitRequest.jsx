import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

export default function SubmitRequest() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "left",
          textDecoration: "underline #3d5afe",
        }}
        gutterBottom
      >
        Submit Request
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: "left",
        }}
        gutterBottom
      >
        Explain your problem below and submit request
      </Typography>
      <Box display={"flex"} paddingTop={5} gutterBottom>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={10}
          placeholder="Write you message..."
          size="Normal"
          fullWidth
        />
      </Box>
      <Box paddingTop={2} display={"flex"} flexDirection={"row-reverse"}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert("Message Sent");
          }}
        >
          Submit Request
        </Button>
      </Box>
    </Box>
  );
}
