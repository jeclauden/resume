import React from "react";
import { TextField } from "@material-ui/core";

export default function TextArea() {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Message"
      multiline
      rows={6}
      variant="outlined"
      style={{ marginBottom: "10px", width: "100%" }}
    />
  );
}
