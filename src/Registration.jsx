import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Registration = () => {
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
          Регистрация пользователя
        </Typography>
        <TextField fullWidth label="Имя" id="fullWidth" />
        <TextField
          style={{ marginTop: 30 }}
          fullWidth
          label="Логин"
          id="fullWidth"
        />
        <TextField
          style={{ marginTop: 30 }}
          fullWidth
          label="Пароль"
          id="fullWidth"
        />
        <FormControlLabel
          style={{ marginTop: 30 }}
          control={<Checkbox defaultChecked />}
          label="Запомнить меня"
        />

        <Button
          style={{ width: "100%", marginTop: 50 }}
          size="large"
          variant="contained"
        >
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};

export default Registration;
