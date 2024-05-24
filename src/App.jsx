import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import Registration from "./Registration";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import System from "./System";
import Typography from "@mui/material/Typography";
import "./App.css";

function App() {
  const [location, setLocation] = useState("/");

  return (
    <BrowserRouter>
      <div
        className="border-header"
        style={{
          flex: 1,
          height: 80,
          // backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 30px",
        }}
      >
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
          {" "}
          <Typography
            style={{ margin: 0 }}
            onClick={() => {
              setLocation("/");
            }}
            variant="h4"
            gutterBottom
          >
            Вопросно-ответная система
          </Typography>
        </Link>

        <div style={{ display: "flex", columnGap: 20 }}>
          <Link style={{}} to="/sign-in">
            <button
              onClick={() => {
                setLocation("/sign-in");
              }}
              style={{
                border: "2px solid #1976d2 ",
                backgroundColor: location === "/sign-in" ? "#1976d2 " : "white",
                color: location === "/sign-in" ? "white" : "#1976d2 ",
                padding: 10,
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              <Typography
                style={{ margin: 0 }}
                variant="button"
                display="block"
                gutterBottom
              >
                {" "}
                Войти
              </Typography>
            </button>
          </Link>
          <Link to="sign-up">
            <button
              onClick={() => {
                setLocation("/sign-up");
              }}
              style={{
                border: "2px solid #1976d2 ",
                backgroundColor: location === "/sign-up" ? "#1976d2 " : "white",
                color: location === "/sign-up" ? "white" : "#1976d2 ",
                padding: 10,
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              <Typography
                style={{ margin: 0 }}
                variant="button"
                display="block"
                gutterBottom
              >
                Регистрация
              </Typography>
            </button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<System />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
