import "./App.css";
import React, { useEffect, useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  function saveData() {
    let data = { pass, email };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
            resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  }
  return (
    <div className="App">
      <img src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH" />
      <h3>Hello there, Sign In to Continue </h3>
      <TextField
        variant="outlined"
        label="Email"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <br /> <br />
      <TextField
        variant="outlined"
        label="Password"
        icon="RemoveRedEyeOutlinedIcon"
        type="text"
        password="password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />{" "}
      <br /> <br /> <br />
      <input type="checkbox" />
      <span>
        By Creating or logging into account, you <br /> are agreeing with{" "}
        <b>Terms and Conditions</b> <br />
        and <b>privacy policies.</b>
      </span>{" "}
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={1.9}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="button"
            onClick={saveData}
          >
            Next
          </Button>
        </Grid>
      </Grid>{" "}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 className="companysso">Singin with Company SSO</h3>
    </div>
  );
}
export default App;
