import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./fontawesome";
import "./globals.css";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost Software",
  description:
    "We build technology to make your life better, faster, and easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.variable} antialiased`}>{children}</body>
    </html>
  );
}
