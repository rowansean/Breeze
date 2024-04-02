import { Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SettingsButton() {
  return (
    <Link href="/">
      <Settings size={30} className="drop-shadow-md text-black opacity-45" />
    </Link>
  );
}
