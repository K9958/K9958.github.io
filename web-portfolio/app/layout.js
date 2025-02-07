import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: process.env.NODE_ENV === 'development'
    ? "Kristian Kantola - Portfolio (DEV)"
    : "Kristian Kantola - Portfolio",
  description: "Tervetuloa portfoliooni",
  icons: {
    icon: process.env.NODE_ENV === 'development' 
      ? '/favicon-dev.ico'
      : '/favicon-prod.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
