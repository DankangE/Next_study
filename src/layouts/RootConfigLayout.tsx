'use client';
import { AntdRegistry } from "@ant-design/nextjs-registry";
import RootContentLayout from "./RootContentLayout";
import { Button, ConfigProvider, theme } from "antd";
import { DarkmodeContext } from "./DarkmodeContext";
import { useState } from "react";

interface RootconfigLayoutProps {
  children?: React.ReactNode;
}

export default function RootConfigLayout({ children }: RootconfigLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);  

  return (
    <AntdRegistry>
      <DarkmodeContext.Provider value={{ isDarkMode, toggleDarkMode: () => setIsDarkMode(!isDarkMode) }}>
        <ConfigProvider theme={{ algorithm: [isDarkMode ? theme.darkAlgorithm: theme.defaultAlgorithm, theme.compactAlgorithm]}}>
          <RootContentLayout>
          <Button onClick={() => setIsDarkMode(!isDarkMode)}>Test</Button>
          {children}
          </RootContentLayout>
        </ConfigProvider>
      </DarkmodeContext.Provider>
    </AntdRegistry>
  )
}