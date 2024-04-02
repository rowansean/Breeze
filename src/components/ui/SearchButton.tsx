import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SearchButton({ className }: { className?: string }) {
  return (
    <Link href="/search" className={`${className}`}>
      <Search size={30} className="drop-shadow-md text-black opacity-45" />
    </Link>
  );
}
