import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./style.module.scss";
import { useState } from "react";
import axios from "axios";

function AuthPages() {
  const [data, setData] = useState({});

  function checkInp(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }


  async function sendARequest() {
    try {
      const res = await axios.post("http://localhost:3000/auth", data, {
        withCredentials: true,
      });
      window.location.href = `/${res.data[0].name}`;
    } catch (error) {
      alert('user is nort found')
    }
  }


  return (
    <>
      <div className={style.wrapper}>
        <h1>Sign In</h1>
        <p>
          Sign in to access your account. Confirm your login and password for unhindered access.
        </p>
        <div>
          <TextField
            onChange={checkInp}
            style={{ width: "100%" }}
            name="login"
            id="outlined-basic"
            label="Your Login"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={checkInp}
            style={{ width: "100%" }}
            id="outlined-basic"
            name="pwd"
            label="Password"
            variant="outlined"
          />
        </div>

        <Button
          onClick={sendARequest}
          style={{ width: "15%", marginLeft: "auto" }}
          variant="contained"
        >
          Continue
        </Button>


      </div>
    </>
  );
}

export default AuthPages;
