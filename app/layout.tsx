import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/font";

export const metadata: Metadata = {
  title: "Frontend Mentor | Pricing Component with Toggle",
  description: "Frontend Mentor | Pricing Component with Toggle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${montserrat.className}`}>{children}</body>
    </html>
  );
}
