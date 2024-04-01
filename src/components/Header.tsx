import { Search, Settings } from "lucide-react";
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
      className={`${className} flex justify-between px-8 text-white items-center`}
    >
      <Search size={30} className="drop-shadow-md text-black opacity-45" />
      {children}
      <Settings size={30} className="drop-shadow-md text-black opacity-45" />
    </div>
  );
}
