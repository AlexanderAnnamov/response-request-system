import React, { useEffect } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <div style={{ width: "30%" }}>
        <Typography
          style={{ marginBottom: 30 }}
          onClick={() => {
            setLocation("/");
          }}
          variant="h5"
          gutterBottom
        >
          Вход в систему
        </Typography>
        <TextField fullWidth label="Логин" id="fullWidth" />
        <TextField
          style={{ marginTop: 30 }}
          fullWidth
          label="Пароль"
          id="fullWidth"
        />

        <Button
          style={{ width: "100%", marginTop: 50 }}
          size="large"
          variant="contained"
        >
          Войти
        </Button>
      </div>
    </div>
  );
};

export default Login;
