"use client";

import { useTheme } from "./darkmode"; // ThemeContext에서 useTheme 임포트
import { Button, ConfigProvider, theme } from "antd";
// import { useState } from "react";

export default function ClientRootLayout({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  // const [darkMode, setDarkMode] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); // 다크 모드 상태와 토글 함수 가져오기

  return (
    <ConfigProvider
      theme={{
        algorithm: [
          isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          theme.compactAlgorithm,
        ],
      }}
    >
      {/* <Button onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </Button> */}
      <Button onClick={toggleDarkMode}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Button>
      {children}
    </ConfigProvider>
  );
}
