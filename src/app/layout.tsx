import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breeze",
  description: "Created by Clayton and Sean",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mt-20 mb-5 flex flex-col gap-5 items-center bg-gradient-to-b from-[#FFF385] via-[#4182FF] via-[60vh] to-[#4182FF] to-100% p-3 overflow-x-hidden min-h-screen font-light">
        {children}
      </body>
    </html>
  );
}
