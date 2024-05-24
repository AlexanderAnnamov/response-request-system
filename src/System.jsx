import React from "react";

import Textarea from "@mui/joy/Textarea";

import { Typography, Button } from "@mui/material";

const System = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
        <Typography style={{ marginBottom: 30 }} variant="h5" gutterBottom>
          Введите текст и задайте по нему вопрос системе, alena
        </Typography>
        <Textarea
          placeholder="Tекст по которому хотите задать вопрос..."
          minRows={5}
        />
        <Textarea
          style={{ marginTop: 30 }}
          placeholder="Введите вопрос по тексту..."
          minRows={1}
        />
        <Button
          style={{ width: "30%", marginTop: 50, alignSelf: "flex-end" }}
          size="large"
          variant="contained"
        >
          Получить ответ на вопрос
        </Button>
        <Typography style={{ marginTop: 50 }} variant="h5" gutterBottom>
          Ответ на ваш вопрос:
        </Typography>
        <Typography style={{ marginTop: 20 }} variant="h6" gutterBottom>
          Э далпаеп ты че на э! Э далпаеп ты че на э! Э далпаеп ты че на э! Э
          далпаеп ты че на э! Э далпаеп ты че на э! Э далпаеп ты че на э! Э
          далпаеп ты че на э! Э далпаеп ты че на э! Э далпаеп ты че на э! Э
          далпаеп ты че на э!
        </Typography>
      </div>
    </div>
  );
};

export default System;
