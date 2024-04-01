import { Search, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} flex justify-between px-8 text-white items-center mt-20`}
    >
      <Link href="/search" className="border">
        <Search size={30} className="drop-shadow-md text-black opacity-45" />
      </Link>
      {children}
      <Link href="/">
        <Settings size={30} className="drop-shadow-md text-black opacity-45" />
      </Link>
    </div>
  );
}
