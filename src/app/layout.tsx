import localFont from "next/font/local";
import "./globals.css";
import RootConfigLayout from "../layouts/RootConfigLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // 화면 전체 높이를 채우기 위해 설정
        }}
      >
        <RootConfigLayout>{children}</RootConfigLayout>
      </body>
    </html>
  );
}
