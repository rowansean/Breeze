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
      className={`${className} flex justify-between text-white items-center`}
    >
      {pathname === "/search" ? (
        <DynamicSearch />
      ) : (
        <div className="flex flex-row w-full px-8 place-items-center">
          <SearchButton className="" />
          <div className="text-center flex-grow">{children}</div>
        </div>
      )}
      {/* END CONDITIONAL RENDER */}
    </div>
  );
}
