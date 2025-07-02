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
      <body className={`${gabarito.variable} antialiased`}>
        {children}
        <footer className="text-center text-white bg-[#2361a3] p-4 md:p-5 py-6 md:py-10 w-full border-[#0a3461] border-t-4 md:border-t-10 text-sm md:text-base">
          Built with ❤️ in Boston, New York City, and Washington, D.C.
        </footer>
      </body>
    </html>
  );
}
