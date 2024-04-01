import { Search, Settings } from "lucide-react";
import React from "react";

export default function Header({ children }) {
  return (
    <div className="flex justify-between px-5 text-white items-center">
        <Search />
        {children}
        <Settings />
    </div>
  );
}
