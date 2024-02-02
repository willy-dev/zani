import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Kaya App",
  description: "Sustainable organic farming is the future app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
