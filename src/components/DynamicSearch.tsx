"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { useState } from "react";

export default function DynamicSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex w-full gap-5 items-center">
      <Input
        className="bg-black bg-opacity-45 rounded-xl"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link href="/">
        <p className="text-black opacity-45 mr-4">cancel</p>
      </Link>
    </div>
  );
}
