import "./globals.css";
import { Inter } from "next/font/google";
import { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Autos Paz",
  description: "App para llevar informacion de autos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StrictMode>{children}</StrictMode>
      </body>
    </html>
  );
}
