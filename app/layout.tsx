import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Verma — iOS Developer",
  description: "Portfolio of Ankit Verma, an iOS developer building real-time mobile experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
