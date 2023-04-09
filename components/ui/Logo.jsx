import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <span className="text-[2rem] font-dancing font-bold cursor-pointer">
        Feane
      </span>
    </Link>
  );
}