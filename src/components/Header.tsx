"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import DynamicSearch from "./DynamicSearch";
import SearchButton from "./ui/SearchButton";
import SettingsButton from "./ui/SettingsButton";

export default function Header({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  
  const pathname = usePathname();

  return (
    <div
      className={`${className} flex justify-between text-white items-center mt-20`}
    >
      {/* CONDITIONAL RENDER */}
      {pathname === "/search" ? (
        <DynamicSearch />
      ) : (
        <div className="flex flex-row justify-between w-full px-8">
          <SearchButton />
          {children}
          <SettingsButton />
        </div>
      )}
      {/* END CONDITIONAL RENDER */}
    </div>
  );
}
