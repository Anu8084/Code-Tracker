import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/themeatom";
import { useNavigate } from "react-router-dom";
import { Sun, Moon, Home } from "lucide-react"; // Optional icons library

const Navbar = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.body.setAttribute("data-theme", theme === "light" ? "dark" : "light"); // optional for global styles
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem",
      background: theme === "light" ? "#eee" : "#333",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      <div onClick={() => navigate("/")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Home /> Home
      </div>
      <button onClick={toggleTheme} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem" }}>
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </nav>
  );
};

export default Navbar;
