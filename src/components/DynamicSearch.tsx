import Link from "next/link";
import { Input } from "./ui/input";

export default function DynamicSearch() {
  return (
    <div className="flex w-full gap-5 items-center">
      <Input
        className="bg-black bg-opacity-45 rounded-xl"
        placeholder="Search..."
      />
      <Link href="/">
        <p className="text-black opacity-45 mr-4"> cancel </p>
      </Link>
    </div>
  );
}
