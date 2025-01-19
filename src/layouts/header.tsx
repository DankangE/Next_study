"use client";

import { useTheme } from "./darkmode"; // ThemeContext에서 useTheme 임포트
import Link from "next/link";
import { Switch } from "antd";

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme(); // 다크 모드 상태와 토글 함수 가져오기

  return (
    <nav
      style={{
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        height: "60px",
        backgroundColor: isDarkMode ? "#333" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <div
        className="logo"
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: isDarkMode ? "#fff" : "#333",
          marginRight: "8rem",
        }}
      >
        Dankang_Blog
      </div>

      {/* Navigation Links */}
      <div
        className="nav_menu"
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: isDarkMode ? "#fff" : "#333",
          }}
        >
          Home
        </Link>
        <Link
          href="/about"
          style={{
            textDecoration: "none",
            color: isDarkMode ? "#fff" : "#333",
          }}
        >
          PostList
        </Link>
        <Link
          href="/contact"
          style={{
            textDecoration: "none",
            color: isDarkMode ? "#fff" : "#333",
          }}
        >
          Post
        </Link>
      </div>

      {/* Login Button and Dark Mode Switch */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button
          style={{
            padding: "0.5rem 2rem",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "20px",
          }}
        >
          Login
        </button>
        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>
    </nav>
  );
}
